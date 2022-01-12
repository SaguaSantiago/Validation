import { Grid } from "@material-ui/core"
import { inputStep1Register } from "../../../../Objects/Objects"
import FieldNormal from "../../Fields/Normal"

export const Step1 = ({ ...props }) => {
  return (
    <div {...props}>
      <div>
        <Grid
          container
          direction="column"
          spacing={3}
          alignContent="center"
          alignItems="center"
          justifyContent="center"
        >
          {inputStep1Register.map(({ sm, xs, name, key, label }) => (
            <Grid item sm={sm} xs={xs}>
              <FieldNormal name={name} key={key} label={label} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
