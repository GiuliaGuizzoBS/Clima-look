let tempMax = null
let tempMin = null
let cidade = "Manual"
let periodo = "dia"

function aplicarTemperaturas() {
  const max = Number(document.getElementById("inputMax").value)
  const min = Number(document.getElementById("inputMin").value)

  const erro = document.getElementById("erro")
  const inputMax = document.getElementById("inputMax")
  const inputMin = document.getElementById("inputMin")

  // valida campos vazios
  if (isNaN(max) || isNaN(min)) {
    erro.style.display = "block"
    erro.innerText = "Preencha a temperatura máxima e mínima."
    marcarErro(inputMax, inputMin)
    return
  }

  // valida regra: mínima não pode ser maior que máxima
  if (min > max) {
    erro.style.display = "block"
    erro.innerText = "A temperatura mínima não pode ser maior que a máxima."
    marcarErro(inputMax, inputMin)
    return
  }

  // remove erro
  erro.style.display = "none"
  desmarcarErro(inputMax, inputMin)

  tempMax = max
  tempMin = min


  document.getElementById("tempMax").innerText = max
  document.getElementById("tempMin").innerText = min

  atualizarRoupas()
}

function marcarErro(inputMax, inputMin) {
  inputMax.style.borderColor = "#f87171"
  inputMin.style.borderColor = "#f87171"
  inputMax.classList.add("input-erro")
  inputMin.classList.add("input-erro")
}

function desmarcarErro(inputMax, inputMin) {
  inputMax.style.borderColor = "rgba(148,163,184,.2)"
  inputMin.style.borderColor = "rgba(148,163,184,.2)"
  inputMax.classList.remove("input-erro")
  inputMin.classList.remove("input-erro")
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
