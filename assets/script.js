let dolar = 5.65

let usdInput = document.querySelector("#usd")
let brlIpunt = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlIpunt.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlIpunt.addEventListener("blur", () => {
    brlIpunt.value = formatCurrency(brlIpunt.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")

// funções
function formatCurrency(value) {
    // ajustar o valor
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-br", options)
    return formatter.format(fixedValue)
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if(floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}

function convert(type) {
    if (type == "usd-to-brl"){
        let fixedValue = fixValue(usdInput.value)

        let result = fixedValue * dolar
        result = result.toFixed(2)

        brlIpunt.value = formatCurrency(result)
    }

    if (type == "brl-to-usd") {
        let fixedValue = fixValue(brlIpunt.value)

        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)
    }
}