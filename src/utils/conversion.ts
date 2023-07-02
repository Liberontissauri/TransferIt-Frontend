
function convertByteToText(bytes: number) {

    const GIGABYTE_BYTE_QUANTITY = 1000000000
    const MEGABYTE_BYTE_QUANTITY = 1000000
    const KILOBYTE_BYTE_QUANTITY = 1000
    
    if (bytes > GIGABYTE_BYTE_QUANTITY) return `${Math.round(bytes/GIGABYTE_BYTE_QUANTITY)} GB`
    if (bytes > MEGABYTE_BYTE_QUANTITY) return `${Math.round(bytes/MEGABYTE_BYTE_QUANTITY)} mb`
    if (bytes > KILOBYTE_BYTE_QUANTITY) return `${Math.round(bytes/KILOBYTE_BYTE_QUANTITY)} kb`
    return `${bytes} bytes`
}

export default {
    convertByteToText
}