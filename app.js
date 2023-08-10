
const massasAtomicas = {
    'H': 1.0079, 'He': 4.0026, 'Li': 6.94, 'Be': 9.0122, 'B': 10.81,
    'C': 12.011, 'N': 14.007, 'O': 15.999, 'F': 19.000, 'Ne': 20.1797,
    'Na': 22.9897, 'Mg': 24.305, 'Al': 26.9815, 'Si': 28.085, 'P': 30.973,
    'S': 32.06, 'Cl': 35.45, 'Ar': 39.948, 'K': 39.0983, 'Ca': 40.078,
    'Sc': 44.9559, 'Ti': 47.867, 'V': 50.9415, 'Cr': 52.00, 'Mn': 54.938,
    'Fe': 55.845, 'Co': 58.933, 'Ni': 58.6934, 'Cu': 63.546, 'Zn': 65.38,
    'Ga': 69.723, 'Ge': 72.630, 'As': 74.9216, 'Se': 78.971, 'Br': 79.904,
    'Kr': 83.798, 'Rb': 85.4678, 'Sr': 87.62, 'Y': 88.9058, 'Zr': 91.224,
    'Nb': 92.9064, 'Mo': 95.95, 'Tc': 98, 'Ru': 101.07, 'Rh': 102.906,
    'Pd': 106.42, 'Ag': 107.8682, 'Cd': 112.414, 'In': 114.818, 'Sn': 118.710,
    'Sb': 121.760, 'Te': 127.60, 'I': 126.9045, 'Xe': 131.293, 'Cs': 132.9055,
    'Ba': 137.327, 'La': 138.9055, 'Ce': 140.116, 'Pr': 140.9077, 'Nd': 144.242,
    'Pm': 145, 'Sm': 150.36, 'Eu': 151.964, 'Gd': 157.25, 'Tb': 158.9253,
    'Dy': 162.500, 'Ho': 164.9303, 'Er': 167.259, 'Tm': 168.9342, 'Yb': 173.045,
    'Lu': 174.9668, 'Hf': 178.49, 'Ta': 180.9479, 'W': 183.84, 'Re': 186.207,
    'Os': 190.23, 'Ir': 192.217, 'Pt': 195.084, 'Au': 196.9666, 'Hg': 200.592,
    'Tl': 204.38, 'Pb': 207.2, 'Bi': 208.9804, 'Th': 232.038, 'Pa': 231.0359,'U': 238.0289, 'Np': 237, 'Pu': 244, 'Am': 243, 'Cm': 247,
    'Bk': 247, 'Cf': 251, 'Es': 252, 'Fm': 257, 'Md': 258,'No': 259, 'Lr': 266, 'Rf': 267, 'Db': 270, 'Sg': 271,
    'Bh': 270, 'Hs': 277, 'Mt': 276, 'Ds': 281, 'Rg': 280,'Cn': 285, 'Nh': 284, 'Fl': 289, 'Mc': 288, 'Lv': 293, 'Ts': 294, 'Og': 294

};

function getMassaMolar(formulaQuimica) {
    let massa = 0;
    const matches = formulaQuimica.match(/[A-Z][a-z]?\d*/g);
    for (let match of matches) {
        let elementoMatch = match.match(/([A-Z][a-z]?)(\d*)/);
        let elemento = elementoMatch[1];
        let quantidade = elementoMatch[2] ? parseInt(elementoMatch[2]) : 1;

        if (massasAtomicas[elemento] == undefined) {
            throw new Error(`Deu erro ai meu amigo o elemento ${element} não existe ou não foi encontrado`); // esse ? é tipo um 'if'
        }

        massa += massasAtomicas[elemento] * quantidade;
    }
    return massa;
}

function calcularMassa() {
    let formula = document.getElementById('formula').value;
    try {
        document.getElementById('result').innerText = `A massa molar de ${formula} é ${getMassaMolar(formula)} g/mol.`;
    } catch (error) {
        document.getElementById('result').innerText = error;
    }
}