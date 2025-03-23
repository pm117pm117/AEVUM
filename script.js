document.addEventListener('DOMContentLoaded', () => {
    const branches = document.querySelectorAll('.branch');
  
    branches.forEach(branch => {
      branch.addEventListener('click', () => {
        const desc = branch.querySelector('.desc');
        const era = branch.closest('.era');
  
        const isAlreadyActive = branch.classList.contains('active');
  
        // 기존 모든 active/show 제거
        document.querySelectorAll('.branch').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.desc').forEach(d => d.classList.remove('show'));
        document.querySelectorAll('.era').forEach(e => e.classList.remove('active'));
  
        // 만약 이미 열려 있었던 항목이라면 → 다시 클릭 시 닫기만 하고 끝
        if (isAlreadyActive) return;
  
        // 새로 열기
        branch.classList.add('active');
        if (desc) desc.classList.add('show');
        if (era) era.classList.add('active');
        });
    });
});