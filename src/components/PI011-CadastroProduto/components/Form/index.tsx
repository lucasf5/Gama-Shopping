import { ArchiveBox, Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useForm } from 'react-hook-form'
import { IFormProps } from "../../../../types";
import {
  FormContainer,
  HeaderContainer,
  FormContent,
  InputName,
  TextDescription,
  InputType,
  InputUrlImage,
  InputPrice,
  ButtonContainer,
  InputCredit,
  InputDebit,
  InputMoney
} from "./styles";

export function Form({ data, setData }: any) {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<IFormProps>()

  function onHandleSubmit(data: IFormProps) {
    // salvar dados no json-server
  }

  function handleChange(event: any) {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <FormContainer>
      <HeaderContainer>
        <ArchiveBox size={24} />
        <p>Complete os campos abaixo para cadastrar novo produto</p>
      </HeaderContainer>

      <FormContent onSubmit={handleSubmit(onHandleSubmit)} onChange={handleChange}>
        <InputName
          id="name"
          type="text"
          placeholder="Nome do produto"
          {...register("name")}
          required
        />

        <TextDescription
          id="description"
          type="text"
          placeholder="Descrição do produto"
          {...register("description")}
          required
        />

        <InputType
          id="type"
          type="text"
          placeholder="Tipo do produto"
          {...register("type")}
          required
        />

        <InputPrice
          id="price"
          type="text"
          placeholder="R$00,00"
          {...register("price")}
          required
        />

        <InputUrlImage
          id="urlImage"
          type="text"
          placeholder="Url imagem"
          {...register("urlImage")}
          required
        />

        <HeaderContainer>
          <CurrencyDollar size={24} />
          <p>
            Pagamento <br />
            <b>
              Selecione a forma de pagamento que deseja aceitar
            </b>
          </p>
        </HeaderContainer>
        <ButtonContainer>
          <InputCredit>
            <label htmlFor="creditCard">
              <CreditCard size={16} />{' '}
              <input
                id="creditCard"
                type="radio"
                value="Cartão de crédito"
                {...register('payment')}
              />
              <span>Cartão de Crédito</span>
            </label>
          </InputCredit>

          <InputDebit>
            <label htmlFor="debitCard">
              <Bank size={16} />
              <input
                id="debitCard"
                type="radio"
                value="Cartão de débito"
                {...register('payment')}
              />
              <span>Cartão de Débito</span>
            </label>
          </InputDebit>

          <InputMoney>
            <label htmlFor="money">
              <Money size={16} />
              <input
                id="money"
                type="radio"
                value="Dinheiro"
                {...register('payment')}
              />
              <span>Dinheiro</span>
            </label>
          </InputMoney>
        </ButtonContainer>

        <div>
          <button disabled={isSubmitting}>Cadastrar</button>
        </div>

      </FormContent>
    </FormContainer>
  )
}