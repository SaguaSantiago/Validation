import { Grid } from "@material-ui/core"
import { inputStep2Register } from "../../../../Objects/Objects"
import FieldNormal from "../../Fields/Normal"

export const Step2 = ({ ...props }) => {
  return (
    <div {...props}>
      <Grid
        container
        direction="column"
        spacing={2}
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        {inputStep2Register.map(({ type, key, name, label, sm, xs }) => (
          <Grid item sm={sm} xs={xs}>
            <FieldNormal type={type} name={name} key={key} label={label} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
