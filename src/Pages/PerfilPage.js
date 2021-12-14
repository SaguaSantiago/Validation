import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"

export default function PerfilPage() {
  const history = useHistory

  const close = () => {
    localStorage.removeItem("Logged")
    history().push("/dashboard")
  }

  return (
    <>
      <h1>Perfil</h1>

      <div>
        <Button onClick={close}> close </Button>
      </div>
    </>
  )
}
