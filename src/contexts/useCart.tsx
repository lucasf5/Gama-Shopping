import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import {
  IAdress,
  ICreateAdressData,
  IEventEmail,
  IProduct,
  IUpdateProductAmount,
  ProductFormatted,
} from "../types";

interface CartProviderProps {
  children: ReactNode;
}

interface ICartContextData {
  cart: IProduct[];
  adress: IAdress[] | undefined;
  activeAdress: IAdress | undefined;
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: IUpdateProductAmount) => void;
  createNewAdress: (data: ICreateAdressData) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cep: string;
  setCep: (cep: string) => void;
  dados: IEventEmail;
  setDados: (dados: IEventEmail) => void;
  pesquisa: string;
  setPesquisa: (pesquisa: string) => void;
  products: ProductFormatted[];
  setProducts: (products: ProductFormatted[]) => void;
  formsEnvio: {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
  };
  setFormsEnvio: (formsEnvio: {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
  }) => void;
  pagamento: string;
  setPagamento: (pagamento: string) => void;
  setCart: (cart: IProduct[]) => void;
}

const CartContext = createContext<ICartContextData>({} as ICartContextData);

export function CartProvider({ children }: CartProviderProps) {
  // CEP + MODAL
  const [isOpen, setIsOpen] = useState(true);
  const [cep, setCep] = useState("");

  // Login
  const [dados, setDados] = useState<IEventEmail>({
    email: "",
    senha: "",
  });

  // loading
  const [loading, setLoading] = useState(false);

  // Pesquisa
  const [formsEnvio, setFormsEnvio] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  useEffect(() => {
    const preencherDados = async () => {
      const response = await axios.get(
        `https://viacep.com.br/ws/${formsEnvio.cep}/json/`
      ).then((response) => {
        setFormsEnvio({
          cep: response.data.cep,
          rua: response.data.logradouro,
          numero: "",
          complemento: "",
          bairro: response.data.bairro,
          cidade: response.data.localidade,
          uf: response.data.uf,
        });
      });
    };
    preencherDados();
  }, [formsEnvio.cep]);

  const [pagamento, setPagamento] = useState("Cartão de Crédito");

  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const [pesquisa, setPesquisa] = useState<string>("");

  const [adress, setAdress] = useState<IAdress[]>([]);
  const [activeAdressId, setActiveAdresId] = useState<string | null>(null);

  const [cart, setCart] = useState<IProduct[]>([]);

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId
      );

      if (!productExists) {
        const product = await api.get(`items/${productId}`);

        const newProduct = {
          ...product.data,
          amount: 1,
        };
        updatedCart.push(newProduct);
      }
      setCart(updatedCart);
      toast.success("Adicionado ao carrinho");
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId
      );

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na romoção do produto");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: IUpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId
      );

      if (productExists) {
        productExists.amount = amount;
        setCart(updatedCart);
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na alteração da quantidade do produto");
    }
  };

  function createNewAdress(data: ICreateAdressData) {
    const id = String(new Date().getTime());

    const newAdress = {
      id,
      cep: data.cep,
      street: data.street,
      number: data.number,
      complement: data.complement,
      district: data.district,
      city: data.city,
      uf: data.uf,
      payment: data.payment,
    };

    setAdress((state) => [...state, newAdress]);
    setActiveAdresId(id);
  }

  const activeAdress = adress.find((adress) => adress.id === activeAdressId);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        adress,
        addProduct,
        removeProduct,
        updateProductAmount,
        createNewAdress,
        activeAdress,
        isOpen,
        setIsOpen,
        cep,
        setCep,
        dados,
        setDados,
        setPesquisa,
        pesquisa,
        products,
        setProducts,
        formsEnvio,
        setFormsEnvio,
        pagamento,
        setPagamento,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): ICartContextData {
  const context = useContext(CartContext);

  return context;
}
