
function convertBitToText(bits: number) {

    const GIGABYTE_BIT_QUANTITY = 8000000000
    const MEGABYTE_BIT_QUANTITY = 8000000
    const KILOBYTE_BIT_QUANTITY = 8000
    const BYTE_BIT_QUANTITY = 8

    if (bits > GIGABYTE_BIT_QUANTITY) return `${bits/GIGABYTE_BIT_QUANTITY} GB`
    if (bits > MEGABYTE_BIT_QUANTITY) return `${bits/MEGABYTE_BIT_QUANTITY} mb`
    if (bits > KILOBYTE_BIT_QUANTITY) return `${bits/KILOBYTE_BIT_QUANTITY} kb`
    if (bits > BYTE_BIT_QUANTITY) return `${bits/BYTE_BIT_QUANTITY} bytes`
    return `${bits/BYTE_BIT_QUANTITY} bits`
}

export default {
    convertBitToText
}