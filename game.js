function openModal() {
  const modal = document.querySelector('.container_grading_overlay');
  if (modal) {
    modal.style.display = 'flex'; 
  }
}

function closeModal() {
  const modal = document.querySelector('.container_grading_overlay');
  if (modal) {
    modal.style.display = 'none'; 
  }
}

function openFailModal() {
  const modal = document.querySelector('.container_grading_fail_overlay');
  if (modal) {
    modal.style.display = 'flex'; 
  }
}


function closeFailModal() {
  const modal = document.querySelector('.container_grading_fail_overlay');
  if (modal) {
    modal.style.display = 'none'; 
  }
}