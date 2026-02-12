let tempMax = null
let tempMin = null
let cidade = "Manual"
let periodo = "dia"

function aplicarTemperaturas() {
  const max = parseInt(document.getElementById("inputMax").value)
  const min = parseInt(document.getElementById("inputMin").value)

  if (isNaN(max) || isNaN(min)) {
    alert("Preencha a temperatura máxima e mínima.")
    return
  }

  tempMax = max
  tempMin = min

  document.getElementById("tempMax").innerText = tempMax
  document.getElementById("tempMin").innerText = tempMin

  atualizarRoupas()
  registrarNoBanco()
}

function roupaCima(temp) {
  if (temp < 10) return "imagemCasacoFrioExtremo"
  if (temp < 16) return "imagemBlusaComCasaco"
  if (temp < 20) return "imagemBlusaLonga"
  if (temp < 28) return "imagemBlusaCurta"
  return "imagemRegata"
}

function roupaBaixo(temp) {
  if (temp <= 8) return "imagemCalcaQuente"
  if (temp <= 22) return "imagemCalca"
  return "imagemShorts"
}

function atualizarRoupas() {
  if (tempMax === null || tempMin === null) return

  const temp = periodo === "dia" ? tempMax : tempMin

  document.getElementById("imagemCima").innerText = roupaCima(temp)
  document.getElementById("imagemBaixo").innerText = roupaBaixo(temp)
}

function animar() {
  const cima = document.getElementById("imagemCima")
  const baixo = document.getElementById("imagemBaixo")

  cima.classList.add("saindo")
  baixo.classList.add("saindo")

  setTimeout(() => {
    atualizarRoupas()
    cima.classList.remove("saindo")
    baixo.classList.remove("saindo")
    cima.classList.add("entrando")
    baixo.classList.add("entrando")

    setTimeout(() => {
      cima.classList.remove("entrando")
      baixo.classList.remove("entrando")
    }, 400)
  }, 400)
}

function mostrarDia() {
  periodo = "dia"
  document.getElementById("periodo").innerText = "Dia"
  animar()
}

function mostrarNoite() {
  periodo = "noite"
  document.getElementById("periodo").innerText = "Noite"
  animar()
}

function registrarNoBanco() {
  fetch("/registrar-acesso", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tempMax,
      tempMin,
      cidade
    })
  })
}
