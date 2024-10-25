const fechaMisa = new Date('2024-12-14T18:00:00');
const iglesia = document.getElementById('iglesia');
const salon = document.getElementById('salon');
const confirmar = document.getElementById('confirmar');
const iglesiaBtn = document.getElementById('iglesia-btn');
const salonBtn = document.getElementById('salon-btn');
const contador = document.getElementById('contador');
const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const numeroTelefono = '3333727921'; 
const mensaje = '¡Confirmo mi asistencia a la boda de aniversario!';

// Confirmar asistencia


// Contador
function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaMisa.getTime() - ahora.getTime();
  
  if (diferencia <= 0) {
    contador.textContent = '¡La misa ya comenzó!';
    return;
  }
  
  const diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundosRestantes = Math.floor((diferencia % (1000 * 60)) / 1000);
  
  dias.textContent = diasRestantes;
  horas.textContent = horasRestantes;
  minutos.textContent = minutosRestantes;
  segundos.textContent = segundosRestantes;
}

setInterval(actualizarContador, 1000);
actualizarContador();