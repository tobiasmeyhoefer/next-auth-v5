
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./card-wrapper";
import { Header } from "./header";

export const ErrorCard = () => {
  return (
    <CardWrapper headerLabel="OOps, Something went wrong" backButtonHref="/auth/login" backButtonLabel="Back To Login">
      <div>
        <ExclamationTriangleIcon className="text-destructive"></ExclamationTriangleIcon>
      </div>
    </CardWrapper>
  )
}