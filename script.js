// State
let carrinho = [];
let marmitas = [];
let currentMarmitaIndex = 0;
let totalMarmitas = 0;

// Imagens padrão (Unsplash) para as categorias, pois não conseguimos gerar com IA
const imgFrango = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400";
const imgCarne = "https://images.unsplash.com/photo-1544025162-8366914b486b?w=400";
const imgPeixe = "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400";
const imgOvos = "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400";
const imgMassa = "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400";
const imgEscondidinho = "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400";
const imgSuco = "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400";
const imgRefri = "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400";

// Dados do Cardápio Completos
const cardapioPratos = [
    {id:1,nome:"Filé de Peito de Frango",desc:"Arroz, feijão, filé de frango grelhado, legumes e couve",preco:39.15,img:imgFrango,cat:["frango"],ops:["temp","arroz"]},
    {id:2,nome:"Chicken Egg",desc:"Ovos mexidos, filé de frango, arroz e legumes",preco:39.15,img:imgFrango,cat:["frango","ovos"],ops:["temp","arroz"]},
    {id:3,nome:"Strogonoff de Frango",desc:"Strogonoff cremoso de frango",preco:32.00,img:imgFrango,cat:["frango"],ops:["temp","arroz"]},
    {id:4,nome:"Isca de Frango",desc:"Arroz, feijão e legumes",preco:34.80,img:imgFrango,cat:["frango"],ops:["temp","arroz"]},
    {id:5,nome:"Carne Moída",desc:"Arroz, carne moída e legumes",preco:39.15,img:imgCarne,cat:["carne"],ops:["temp","arroz","acomp"]},
    {id:6,nome:"Carne de Panela",desc:"Arroz, feijão e legumes",preco:32.50,img:imgCarne,cat:["carne"],ops:["temp","arroz"]},
    {id:7,nome:"Abobrinha com Carne Moída",desc:"Arroz e legumes",preco:34.98,img:imgCarne,cat:["carne"],ops:["temp","arroz"]},
    {id:8,nome:"Filé de Tilápia",desc:"Acompanha arroz, legumes e purê",preco:36.40,img:imgPeixe,cat:["peixe"],ops:["temp","arroz","pure"]},
    {id:9,nome:"Cubos de Salmão",desc:"Arroz, legumes e couve",preco:37.40,img:imgPeixe,cat:["peixe"],ops:["temp","arroz"]},
    {id:10,nome:"Macarrão Integral c/ Atum",desc:"Macarrão integral ao molho com atum",preco:32.00,img:imgPeixe,cat:["peixe","massas"],ops:["temp"]},
    {id:11,nome:"Ovos Mexidos",desc:"Arroz e legumes",preco:26.50,img:imgOvos,cat:["ovos"],ops:["temp","arroz"]},
    {id:12,nome:"Omelete",desc:"Omelete com acompanhamentos",preco:29.99,img:imgOvos,cat:["ovos"],ops:["temp","arroz"]},
    {id:13,nome:"Macarrão Integral c/ Carne Moída",desc:"Macarrão integral ao molho com carne moída",preco:32.00,img:imgMassa,cat:["carne","massas"],ops:["temp"]},
    {id:14,nome:"Lasanha de Frango",desc:"Lasanha cremosa de frango",preco:34.00,img:imgMassa,cat:["lasanhas","frango"],ops:["temp"]},
    {id:15,nome:"Lasanha à Bolonhesa",desc:"Clássica lasanha à bolonhesa",preco:31.00,img:imgMassa,cat:["lasanhas","carne"],ops:["temp"]},
    {id:16,nome:"Lasanha de Presunto e Queijo",desc:"Lasanha de presunto e queijo gratinado",preco:34.00,img:imgMassa,cat:["lasanhas"],ops:["temp"]},
    {id:17,nome:"Lasanha de Peito de Peru",desc:"Lasanha com peito de peru",preco:34.00,img:imgMassa,cat:["lasanhas"],ops:["temp"]},
    {id:18,nome:"Lasanha de Berinjela",desc:"Lasanha de berinjela assada",preco:34.00,img:imgMassa,cat:["lasanhas","vegetariano"],ops:["temp"]},
    {id:19,nome:"Lasanha de Brócolis",desc:"Lasanha de brócolis com molho branco",preco:34.00,img:imgMassa,cat:["lasanhas","vegetariano"],ops:["temp"]},
    {id:20,nome:"Lasanha de Queijo",desc:"Lasanha vegetariana de queijo",preco:34.00,img:imgMassa,cat:["lasanhas","vegetariano"],ops:["temp"]},
    {id:21,nome:"Lasanha de Legumes",desc:"Lasanha vegetariana de legumes variados",preco:34.86,img:imgMassa,cat:["lasanhas","vegetariano"],ops:["temp"]},
    {id:22,nome:"Escondidinho de Frango",desc:"Frango cremoso coberto com purê",preco:29.00,img:imgEscondidinho,cat:["escondidinho","frango"],ops:["temp","tamanho","pure"]},
    {id:23,nome:"Escondidinho de Carne Moída",desc:"Carne moída cremosa coberta com purê",preco:29.00,img:imgEscondidinho,cat:["escondidinho","carne"],ops:["temp","tamanho","pure"]},
    {id:24,nome:"Escondidinho de Carne Seca",desc:"Carne seca desfiada coberta com purê",preco:37.21,img:imgEscondidinho,cat:["escondidinho","carne"],ops:["temp","tamanho","pure"]},
    {id:25,nome:"Escondidinho de Brócolis",desc:"Brócolis cremoso coberto com purê (vegetariano)",preco:29.00,img:imgEscondidinho,cat:["escondidinho","vegetariano"],ops:["temp","tamanho","pure"]},
    {id:26,nome:"Suco Super Saudável",desc:"Suco natural de polpa",preco:14.00,img:imgSuco,cat:["bebidas"],ops:[]},
    {id:27,nome:"Suco de Morango",desc:"Suco natural de morango",preco:14.00,img:imgSuco,cat:["bebidas"],ops:["acucar"]},
    {id:28,nome:"Suco de Laranja",desc:"Suco natural de laranja",preco:14.00,img:imgSuco,cat:["bebidas"],ops:[]},
    {id:29,nome:"Coca-Cola Original",desc:"Lata de 350ml",preco:7.50,img:imgRefri,cat:["bebidas"],ops:[]},
    {id:30,nome:"Coca-Cola Sem Áçucar",desc:"Lata de 350ml",preco:6.90,img:imgRefri,cat:["bebidas"],ops:[]}
];

const GRUPOS = [
    {key:'frango',label:'Frango'},
    {key:'carne',label:'Carnes'},
    {key:'peixe',label:'Peixes'},
    {key:'ovos',label:'Ovos'},
    {key:'massas',label:'Massas'},
    {key:'lasanhas',label:'Lasanhas'},
    {key:'escondidinho',label:'Escondidinho'},
    {key:'bebidas',label:'Bebidas'},
];

// Iniciar
document.addEventListener("DOMContentLoaded", () => {
    renderFiltros();
    renderPratos("home");
    renderPratos("cardapio");
});

// Navegação de Views
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${viewId}`).classList.add('active');
    
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    if(document.getElementById(`nav-${viewId}`)) {
        document.getElementById(`nav-${viewId}`).classList.add('active');
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function goToSobre() {
    switchView('home');
    setTimeout(() => {
        document.getElementById('sobre').scrollIntoView({behavior: 'smooth'});
    }, 100);
}

function ajustarMarmitas(delta) {
    let input = document.getElementById('total-marmitas-input');
    let val = parseInt(input.value) + delta;
    if(val >= 1 && val <= 100) input.value = val;
}

// Filtros
function renderFiltros() {
    let container = document.getElementById('filtros-container');
    if(!container) return;
    
    container.innerHTML = `<button class="filtro-btn ativo" onclick="filtrar(this,'todos')">Todos</button>`;
    GRUPOS.forEach(g => {
        container.innerHTML += `<button class="filtro-btn" onclick="filtrar(this,'${g.key}')">${g.label}</button>`;
    });
}

function filtrar(btn, cat) {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    renderPratos('cardapio', cat);
}

// Renderizar Pratos
function renderPratos(target, filtro = 'todos') {
    let container = document.getElementById(target === 'home' ? 'home-pratos-grid' : 'pratos-grid');
    if(!container) return;
    
    container.innerHTML = "";
    
    let filtrados = cardapioPratos;
    if (filtro !== 'todos') {
        filtrados = cardapioPratos.filter(p => p.cat.includes(filtro));
    }
    
    if (target === 'home') {
        filtrados = filtrados.slice(0, 3); // Apenas 3 no home
    }

    filtrados.forEach(p => {
        container.innerHTML += `
            <div class="prato-card" onclick="abrirDetalhe(${p.id})">
                <div class="prato-img-container">
                    <img src="${p.img}" class="prato-img" alt="${p.nome}">
                </div>
                <div class="prato-content-wrapper">
                    <div class="prato-nome">${p.nome}</div>
                    <div class="prato-desc">${p.desc}</div>
                    <div class="prato-bottom">
                        <div class="prato-preco">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
                        <button class="btn-add-prato-icon"><span>+</span></button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Detalhe e Carrinho (Pratos normais)
let pratoSelecionado = null;

function abrirDetalhe(id) {
    pratoSelecionado = cardapioPratos.find(p => p.id === id);
    document.getElementById('det-nome').innerText = pratoSelecionado.nome;
    document.getElementById('det-desc').innerText = pratoSelecionado.desc;
    document.getElementById('det-preco').innerText = `R$ ${pratoSelecionado.preco.toFixed(2).replace('.', ',')}`;
    
    // Opções Dinâmicas (Arroz, Purê, Temp)
    let containerOpcoes = document.getElementById('det-opcoes-dinamicas');
    containerOpcoes.innerHTML = "";
    
    if (pratoSelecionado.ops.includes('temp')) {
        containerOpcoes.innerHTML += `
            <div class="op-group">
                <h4>Opção de preparo</h4>
                <label class="op-radio-label"><input type="radio" name="op_temp" value="Quente" checked> Quente (para comer agora)</label>
                <label class="op-radio-label"><input type="radio" name="op_temp" value="Congelado"> Congelado (para guardar)</label>
            </div>
        `;
    }

    if (pratoSelecionado.ops.includes('arroz')) {
        containerOpcoes.innerHTML += `
            <div class="op-group">
                <h4>Qual arroz você prefere?</h4>
                <label class="op-radio-label"><input type="radio" name="op_arroz" value="Arroz Branco" checked> Arroz Branco</label>
                <label class="op-radio-label"><input type="radio" name="op_arroz" value="Arroz Integral"> Arroz Integral</label>
            </div>
        `;
    }
    
    if (pratoSelecionado.ops.includes('pure')) {
        containerOpcoes.innerHTML += `
            <div class="op-group">
                <h4>Qual purê você prefere?</h4>
                <label class="op-radio-label"><input type="radio" name="op_pure" value="Batata Lisa" checked> Batata Lisa</label>
                <label class="op-radio-label"><input type="radio" name="op_pure" value="Batata Doce"> Batata Doce</label>
            </div>
        `;
    }

    document.getElementById('det-obs').value = "";
    document.getElementById('det-overlay').classList.add('active');
}

function fecharDetalhe() {
    document.getElementById('det-overlay').classList.remove('active');
    pratoSelecionado = null;
}

function fecharDetalheAoClicar(e) {
    if(e.target.id === 'det-overlay') fecharDetalhe();
}

function addDoDetalhe() {
    let obsText = document.getElementById('det-obs').value.trim();
    let opcoesSelecionadas = [];

    if (pratoSelecionado.ops.includes('temp')) {
        let selecionado = document.querySelector('input[name="op_temp"]:checked');
        if (selecionado) opcoesSelecionadas.push(`Opção: ${selecionado.value}`);
    }
    if (pratoSelecionado.ops.includes('arroz')) {
        let selecionado = document.querySelector('input[name="op_arroz"]:checked');
        if (selecionado) opcoesSelecionadas.push(`Arroz: ${selecionado.value}`);
    }
    if (pratoSelecionado.ops.includes('pure')) {
        let selecionado = document.querySelector('input[name="op_pure"]:checked');
        if (selecionado) opcoesSelecionadas.push(`Purê: ${selecionado.value}`);
    }

    let obsFinal = opcoesSelecionadas.join(' | ');
    if (obsText) {
        obsFinal += obsFinal ? ` | Obs: ${obsText}` : `Obs: ${obsText}`;
    }

    carrinho.push({
        tipo: 'prato',
        item: pratoSelecionado,
        obs: obsFinal
    });
    
    fecharDetalhe();
    atualizarBadge();
    showToast();
}

// Carrinho UI
function atualizarBadge() {
    let totalItems = carrinho.length;
    if (marmitas.length > 0 && document.getElementById('builder-step-3').style.display === 'block') {
        totalItems += marmitas.length;
    }
    document.getElementById('badge-count').innerText = totalItems;
}

function showToast() {
    let toast = document.getElementById('toast-cart');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function abrirCarrinho() {
    renderListaCarrinho();
    document.getElementById('modal-carrinho').classList.add('active');
}

function fecharCarrinho() {
    document.getElementById('modal-carrinho').classList.remove('active');
}

function fecharAoClicarFora(e) {
    if(e.target.id === 'modal-carrinho') fecharCarrinho();
}

function removerDoCarrinho(index, tipo) {
    if (tipo === 'prato') {
        carrinho.splice(index, 1);
    } else if (tipo === 'marmita') {
        marmitas.splice(index, 1);
        totalMarmitas = marmitas.length;
    }
    renderListaCarrinho();
    atualizarBadge();
}

function formatMarmitaItem(arr) {
    return arr.filter(i => i.nome).map(i => `${i.nome} (${i.qtd}g)`).join(' + ');
}

function renderListaCarrinho() {
    let lista = document.getElementById('lista-carrinho');
    let totalValor = 0;
    let temMarmita = false;
    
    lista.innerHTML = "";
    
    // Render Pratos
    carrinho.forEach((c, index) => {
        totalValor += c.item.preco;
        lista.innerHTML += `
            <div class="carrinho-item">
                <div class="c-item-info">
                    <strong>${c.item.nome}</strong>
                    ${c.obs ? `<div class="c-item-obs">${c.obs}</div>` : ''}
                    <button class="btn-remover" onclick="removerDoCarrinho(${index}, 'prato')">Remover</button>
                </div>
                <div class="c-item-preco">R$ ${c.item.preco.toFixed(2).replace('.', ',')}</div>
            </div>
        `;
    });

    // Render Marmitas Personalizadas (se finalizadas)
    if (marmitas.length > 0 && document.getElementById('builder-step-3').style.display === 'block') {
        temMarmita = true;
        marmitas.forEach((m, index) => {
            let desc = [];
            let pStr = formatMarmitaItem(m.proteinas);
            let cStr = formatMarmitaItem(m.carbos);
            let lStr = formatMarmitaItem(m.legumes);
            let sStr = formatMarmitaItem(m.saladas);
            
            if(pStr) desc.push(pStr);
            if(cStr) desc.push(cStr);
            if(lStr) desc.push(lStr);
            if(sStr) desc.push(sStr);
            
            lista.innerHTML += `
                <div class="carrinho-item">
                    <div class="c-item-info">
                        <strong>Marmita Personalizada ${index + 1}</strong>
                        <div class="c-item-obs">${desc.join(' • ')}</div>
                        ${m.obs ? `<div class="c-item-obs">Obs: ${m.obs}</div>` : ''}
                        <button class="btn-remover" onclick="removerDoCarrinho(${index}, 'marmita')">Remover</button>
                    </div>
                    <div class="c-item-preco">A calcular</div>
                </div>
            `;
        });
    }

    document.getElementById('total-valor').innerText = `R$ ${totalValor.toFixed(2).replace('.', ',')}`;
    
    if (carrinho.length === 0 && marmitas.length === 0) {
        document.getElementById('carrinho-vazio').style.display = 'block';
        document.getElementById('opcoes-fin').style.display = 'none';
    } else {
        document.getElementById('carrinho-vazio').style.display = 'none';
        document.getElementById('opcoes-fin').style.display = 'block';
    }

    if (temMarmita) {
        document.getElementById('total-nota').style.display = 'block';
    } else {
        document.getElementById('total-nota').style.display = 'none';
    }
}


/* ==================================================
   BUILDER DE MARMITAS (MÚLTIPLOS ITENS)
================================================== */

function startBuilder() {
    let qtdInput = parseInt(document.getElementById('total-marmitas-input').value);
    if (isNaN(qtdInput) || qtdInput < 1) {
        alert("Por favor, insira uma quantidade válida de marmitas.");
        return;
    }
    
    totalMarmitas = qtdInput;
    marmitas = []; // Reseta
    
    // Inicializa os objetos de marmita vazios
    for (let i = 0; i < totalMarmitas; i++) {
        marmitas.push(getEmptyMarmita());
    }
    
    currentMarmitaIndex = 0;
    
    document.getElementById('builder-step-1').style.display = 'none';
    document.getElementById('builder-step-3').style.display = 'none';
    document.getElementById('builder-step-2').style.display = 'block';
    
    renderCurrentMarmita();
}

function getEmptyMarmita() {
    return {
        proteinas: [],
        carbos: [],
        legumes: [],
        saladas: [],
        obs: ""
    };
}

// Cria uma linha de input no HTML
function createIngRowHTML(cat, nome = '', qtd = '') {
    return `
        <div class="ing-row">
            <input type="text" class="input-nome" placeholder="Digite a opção..." value="${nome}" oninput="checkShowAddBtn('${cat}')">
            <input type="number" class="input-grams" placeholder="Gramas (ex: 100)" value="${qtd}" min="1" oninput="if(this.value !== '' && this.value < 1) this.value = 1; checkShowAddBtn('${cat}')">
            <span>g</span>
            <button class="btn-remove-ing" onclick="removeRow(this, '${cat}')">✕</button>
        </div>
    `;
}

function removeRow(btn, cat) {
    btn.parentElement.remove();
    checkShowAddBtn(cat);
}

function checkShowAddBtn(cat) {
    let list = document.getElementById(`lista-${cat}`);
    let rows = list.querySelectorAll('.ing-row');
    let btnAdd = document.getElementById(`btn-add-${cat}`);
    
    if(!btnAdd) return;
    
    if (rows.length === 0) {
        btnAdd.style.display = 'none';
        return;
    }
    
    let lastRow = rows[rows.length - 1];
    let n = lastRow.querySelector('.input-nome').value.trim();
    let q = lastRow.querySelector('.input-grams').value.trim();
    
    if (n !== '' && q !== '') {
        btnAdd.style.display = 'inline-block';
    } else {
        btnAdd.style.display = 'none';
    }
}

function addIngRow(cat, nome = '', qtd = '') {
    document.getElementById(`lista-${cat}`).insertAdjacentHTML('beforeend', createIngRowHTML(cat, nome, qtd));
    checkShowAddBtn(cat);
}

function renderCurrentMarmita() {
    let m = marmitas[currentMarmitaIndex];
    if (!m) return;

    document.getElementById('builder-title').innerText = `Montando Marmita ${currentMarmitaIndex + 1}`;
    document.getElementById('current-m-display').innerText = currentMarmitaIndex + 1;
    document.getElementById('total-m-display').innerText = totalMarmitas;

    // Limpa listas
    ['proteina', 'carbo', 'legumes', 'saladas'].forEach(cat => {
        document.getElementById(`lista-${cat}`).innerHTML = "";
    });

    document.getElementById('obs-marmita').value = m.obs || "";
    document.getElementById('builder-error').style.display = 'none';

    document.getElementById('check-replicar').checked = false;
    document.getElementById('check-replicar').disabled = false;
    document.getElementById('replicar-controls').style.display = 'none';
    let maxAllowed = totalMarmitas - currentMarmitaIndex - 1;
    let inputReplicar = document.getElementById('input-replicar-qtd');
    inputReplicar.max = maxAllowed;
    inputReplicar.value = 1;
    document.getElementById('replicar-max-msg').innerText = `Você pode adicionar até ${maxAllowed} marmita(s) extra(s).`;

    if (currentMarmitaIndex === totalMarmitas - 1) {
        document.getElementById('check-replicar').disabled = true;
        document.getElementById('btn-next-marmita').innerText = "Finalizar Todas ✅";
    } else {
        document.getElementById('btn-next-marmita').innerText = "Próxima →";
    }

    if (currentMarmitaIndex === 0) {
        document.getElementById('btn-prev-marmita').style.visibility = 'hidden';
    } else {
        document.getElementById('btn-prev-marmita').style.visibility = 'visible';
    }

    // Preenche com os dados salvos (se houver), ou com uma linha vazia
    fillCategoryUI('proteina', m.proteinas);
    fillCategoryUI('carbo', m.carbos);
    fillCategoryUI('legumes', m.legumes);
    fillCategoryUI('saladas', m.saladas);
    
    // Fazer scroll automático para o topo da tela
    document.getElementById('view-marmitas').scrollIntoView({behavior: 'smooth', block: 'start'});
}

function fillCategoryUI(cat, dataList) {
    let container = document.getElementById(`lista-${cat}`);
    container.innerHTML = ""; // Forçar limpeza total sempre que renderiza
    
    if (!dataList || dataList.length === 0) {
        addIngRow(cat);
        return;
    }

    dataList.forEach(data => {
        if (data.nome) {
            addIngRow(cat, data.nome, data.qtd);
        }
    });
    
    checkShowAddBtn(cat);
}

function selectIng(cat, nome) {
    let container = document.getElementById(`lista-${cat}`);
    let rows = container.querySelectorAll('.ing-row');
    
    if (rows.length > 0) {
        let lastRow = rows[rows.length - 1];
        lastRow.querySelector('.input-nome').value = nome;
    } else {
        addIngRow(cat, nome, '');
    }
    
    checkShowAddBtn(cat);
}

function checkReplicarMax() {
    let input = document.getElementById('input-replicar-qtd');
    let maxAllowed = totalMarmitas - currentMarmitaIndex - 1;
    let val = parseInt(input.value) || 0;
    
    if (val > maxAllowed) {
        input.value = maxAllowed;
        val = maxAllowed;
    }

    if (val > maxAllowed || maxAllowed === 0) {
        document.getElementById('replicar-extra-btn').style.display = 'block';
    } else {
        document.getElementById('replicar-extra-btn').style.display = 'none';
    }
}

function toggleReplicar() {
    let check = document.getElementById('check-replicar');
    document.getElementById('replicar-controls').style.display = check.checked ? 'block' : 'none';
    if(check.checked) {
        document.getElementById('input-replicar-qtd').value = 1;
        checkReplicarMax();
    }
}

function adicionarMarmitaAoTotal() {
    totalMarmitas++;
    marmitas.push(getEmptyMarmita());
    document.getElementById('total-m-display').innerText = totalMarmitas;
    
    let maxAllowed = totalMarmitas - currentMarmitaIndex - 1;
    document.getElementById('replicar-max-msg').innerText = `Você pode adicionar até ${maxAllowed} marmita(s) extra(s).`;
    checkReplicarMax();
    
    if (currentMarmitaIndex < totalMarmitas - 1) {
        document.getElementById('btn-next-marmita').innerText = "Próxima →";
    }
    
    let badgeMsg = document.createElement("div");
    badgeMsg.innerText = "Marmita adicionada com sucesso!";
    badgeMsg.style.cssText = "position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: var(--green-primary); color: white; padding: 10px 20px; border-radius: 8px; z-index: 9999; font-weight: bold;";
    document.body.appendChild(badgeMsg);
    setTimeout(() => badgeMsg.remove(), 2500);
}

function extractCategoryData(cat, label, errorMsg) {
    let rows = document.querySelectorAll(`#lista-${cat} .ing-row`);
    let dataList = [];
    let hasNameWithoutQtd = false;
    
    rows.forEach(r => {
        let nome = r.querySelector('.input-nome').value.trim();
        let qtd = r.querySelector('.input-grams').value.trim();
        
        if (nome) {
            if (!qtd) hasNameWithoutQtd = true;
            dataList.push({ nome, qtd });
        }
    });
    
    if (hasNameWithoutQtd) {
        errorMsg.push(`Você escolheu ${label}, mas não informou a quantidade em gramas.`);
    }
    
    return dataList;
}

function saveCurrentMarmita() {
    let m = getEmptyMarmita();
    let errorMsg = [];

    m.proteinas = extractCategoryData('proteina', 'Proteína', errorMsg);
    m.carbos = extractCategoryData('carbo', 'Carboidrato', errorMsg);
    m.legumes = extractCategoryData('legumes', 'Legumes', errorMsg);
    m.saladas = extractCategoryData('saladas', 'Saladas', errorMsg);
    m.obs = document.getElementById('obs-marmita').value.trim();

    let isEmpty = m.proteinas.length === 0 && m.carbos.length === 0 && 
                  m.legumes.length === 0 && m.saladas.length === 0 && !m.obs;
    
    if (isEmpty) {
        errorMsg.push("A marmita não pode ficar totalmente vazia. Escolha algo ou preencha observações.");
    }

    if (errorMsg.length > 0) {
        let errDiv = document.getElementById('builder-error');
        errDiv.innerHTML = errorMsg.join('<br>');
        errDiv.style.display = 'block';
        return false;
    }

    marmitas[currentMarmitaIndex] = m;
    return true;
}

function nextMarmita() {
    if (!saveCurrentMarmita()) return;

    let replicar = document.getElementById('check-replicar').checked;
    if (replicar) {
        let maxAllowed = totalMarmitas - currentMarmitaIndex - 1;
        let qtdExtras = parseInt(document.getElementById('input-replicar-qtd').value);
        if (isNaN(qtdExtras) || qtdExtras < 1) {
            alert("Informe uma quantidade válida de marmitas extras para replicar.");
            return;
        }
        if (qtdExtras > maxAllowed) {
            alert(`Você só tem mais ${maxAllowed} marmita(s) disponíveis no total do pedido. Diminua a quantidade extra ou adicione mais marmitas ao total.`);
            return;
        }
        
        let mData = JSON.stringify(marmitas[currentMarmitaIndex]);
        for (let i = 1; i <= qtdExtras; i++) {
            marmitas[currentMarmitaIndex + i] = JSON.parse(mData);
        }
        
        currentMarmitaIndex = currentMarmitaIndex + qtdExtras;
    }

    currentMarmitaIndex++;

    if (currentMarmitaIndex >= totalMarmitas) {
        document.getElementById('builder-step-2').style.display = 'none';
        document.getElementById('builder-step-3').style.display = 'block';
        atualizarBadge();
        // Garantir que a página vá para o topo ao finalizar
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        renderCurrentMarmita();
    }
}

function prevMarmita() {
    saveCurrentMarmitaSemValidacao();
    if (currentMarmitaIndex > 0) {
        currentMarmitaIndex--;
        renderCurrentMarmita();
    }
}

function saveCurrentMarmitaSemValidacao() {
    let m = getEmptyMarmita();
    let discardMsg = []; // Não exibimos os erros na volta
    
    m.proteinas = extractCategoryData('proteina', 'Proteína', discardMsg);
    m.carbos = extractCategoryData('carbo', 'Carboidrato', discardMsg);
    m.legumes = extractCategoryData('legumes', 'Legumes', discardMsg);
    m.saladas = extractCategoryData('saladas', 'Saladas', discardMsg);
    m.obs = document.getElementById('obs-marmita').value.trim();
    
    marmitas[currentMarmitaIndex] = m;
}

function excluirMarmitaAtual() {
    if (confirm("Tem certeza que deseja excluir esta marmita? Isso diminuirá o total de marmitas.")) {
        marmitas.splice(currentMarmitaIndex, 1);
        totalMarmitas--;
        
        if (totalMarmitas === 0) {
            document.getElementById('builder-step-2').style.display = 'none';
            document.getElementById('builder-step-1').style.display = 'block';
        } else {
            if (currentMarmitaIndex >= totalMarmitas) {
                currentMarmitaIndex = totalMarmitas - 1;
            }
            
            // Garantir que a marmita que assume o lugar seja totalmente em branco, 
            // como pedido (sempre que exclui, a próxima aparece vazia)
            marmitas[currentMarmitaIndex] = getEmptyMarmita();
            
            renderCurrentMarmita();
        }
    }
}

/* ==================================================
   WHATSAPP INTEGRATION
================================================== */
function finalizarPedido() {
    if (carrinho.length === 0 && marmitas.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let obsGeral = document.getElementById('carrinho-obs').value.trim();
    let desejaTalheres = document.getElementById('check-talheres').checked;
    
    let texto = "*Novo Pedido - Sabor + Saúde*\n\n";
    
    if (carrinho.length > 0) {
        texto += "🍽️ *Pratos do Menu:*\n";
        carrinho.forEach(c => {
            texto += `- ${c.item.nome} (R$ ${c.item.preco.toFixed(2)})\n`;
            if (c.obs) texto += `  _Obs: ${c.obs}_\n`;
        });
        texto += "\n";
    }

    if (marmitas.length > 0 && document.getElementById('builder-step-3').style.display === 'block') {
        texto += "🧑‍🍳 *Marmitas Personalizadas:*\n";
        marmitas.forEach((m, i) => {
            texto += `*Marmita ${i + 1}*\n`;
            
            let pStr = formatMarmitaItem(m.proteinas);
            let cStr = formatMarmitaItem(m.carbos);
            let lStr = formatMarmitaItem(m.legumes);
            let sStr = formatMarmitaItem(m.saladas);
            
            if(pStr) texto += `  - Proteínas: ${pStr}\n`;
            if(cStr) texto += `  - Carboidratos: ${cStr}\n`;
            if(lStr) texto += `  - Legumes: ${lStr}\n`;
            if(sStr) texto += `  - Saladas: ${sStr}\n`;
            if(m.obs) texto += `  _Obs: ${m.obs}_\n`;
        });
        texto += "\n_*(Valores a calcular)*_\n\n";
    }

    if (desejaTalheres) {
        texto += `🍴 *Deseja talheres:* SIM\n\n`;
    }

    if (obsGeral) {
        texto += `📝 *Observações Gerais:*\n${obsGeral}\n\n`;
    }

    let encoded = encodeURIComponent(texto);
    window.open(`https://wa.me/5511999999999?text=${encoded}`, '_blank');
}
