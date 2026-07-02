const fecha=document.getElementById('fecha');
fecha.textContent=new Date().toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
let clientes=JSON.parse(localStorage.getItem('clientes')||'[]');
function render(){
 const lista=document.getElementById('clientes');
 lista.innerHTML='';
 let total=0;
 clientes.forEach(c=>{
   total+=Number(c.importe);
   const d=document.createElement('div');
   d.className='item';
   d.innerHTML=`<span>${c.hora} - ${c.nombre}</span><strong>${Number(c.importe).toFixed(2)} €</strong>`;
   lista.appendChild(d);
 });
 document.getElementById('total').textContent=total.toFixed(2)+' €';
 localStorage.setItem('clientes',JSON.stringify(clientes));
}
document.getElementById('guardar').onclick=()=>{
 const nombre=document.getElementById('nombre').value.trim();
 const importe=document.getElementById('importe').value;
 if(!nombre||!importe){alert('Completa nombre e importe');return;}
 const hora=new Date().toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'});
 clientes.push({hora,nombre,importe});
 document.getElementById('nombre').value='';
 document.getElementById('importe').value='';
 render();
};
render();
