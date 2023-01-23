import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const EnerbiteApp = () => {
  return (
    <>
        <AppTheme>
            <AppRouter/>
        </AppTheme>
    </>
  )
}
