import { AddressesSchema, createAddressesSchema } from '../schema/addresses.schema'
import { z } from 'zod'

type IaddressesReturn = z.infer<typeof AddressesSchema>
type IaddressesCreate = z.infer<typeof createAddressesSchema>


export {
    IaddressesReturn,
    IaddressesCreate
}