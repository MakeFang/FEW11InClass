// Your scripts here

const input_amount = document.getElementById('amount');
const input_percent = document.getElementById('percent');
const input_numppl = document.getElementById('numppl');
const calcbutton = document.getElementById('calculate');

const tip = document.getElementById('tip');
const total = document.getElementById('total');
const each = document.getElementById('each');



calcbutton.onclick = (e) => {
    const amount = Number(input_amount.value);
    const percent = Number(input_percent.value);
    const numppl = Number(input_numppl.value);
    let tipnum = amount * percent/100;
    tip.innerHTML = tipnum;
    // let totalamount = parseFloat(tipnum) + parseFloat(amount);
    let totalamount = tipnum + amount;
    total.innerHTML = totalamount;
    let ea = totalamount/numppl;
    each.innerHTML = ea.toFixed(2);
};
