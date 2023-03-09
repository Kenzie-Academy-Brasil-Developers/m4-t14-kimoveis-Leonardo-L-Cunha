import { RealEstateSchema, CreateRealEstateSchema, CompleteRealEstateSchema, ReturnCompleteRealEstateSchema, RealEstateWithAddress } from '../schema/realEstate.schema'
import { z } from 'zod'

type IrealEstateReturn = z.infer<typeof RealEstateSchema>
type IrealEstateCreate = z.infer<typeof CreateRealEstateSchema>
type IcompleteRealEstate = z.infer<typeof CompleteRealEstateSchema>
type IreturnCompleteRealEstate = z.infer<typeof ReturnCompleteRealEstateSchema>
type IrealEstateWithAddress = z.infer<typeof RealEstateWithAddress>


export {
    IrealEstateReturn,
    IrealEstateCreate,
    IcompleteRealEstate,
    IreturnCompleteRealEstate,
    IrealEstateWithAddress
}