import { MainPage } from '../components/MainPage'
import * as dataApiBusiness from '../api/DataBusiness.json'

export function Home() {
    const dash = dataApiBusiness.dashboard
    // const data = dataApiBusiness.table
    // const perm = dataApiBusiness.businessPermition
    // eslint-disable-next-line no-console
    console.log(Object.getOwnPropertyNames(dash))
    return <MainPage> ... </MainPage>
}
