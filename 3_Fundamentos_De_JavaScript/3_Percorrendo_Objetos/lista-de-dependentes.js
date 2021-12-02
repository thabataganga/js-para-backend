const clientes = [{
        nome: "André",
        idade: 36,
        cpf: "12365242625",
        email: "andre@email.com",
        fones: ["5591235498", "552198874312"],
        dependentes: [{
                nome: "Sara Silva",
                parentesco: "filha",
                dataNasc: "20/03/2011"
            },
            {
                nome: "Samia Maria",
                parentesco: "filha",
                dataNasc: "04/01/2014"
            }
        ]
    },
    {
        nome: "Juliana",
        idade: 27,
        cpf: "4984946549",
        email: "juliana@email.com",
        fones: ["89794564988", "8979451984"],
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "22/05/2020"
        }]
    }
]

const listaDeDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(listaDeDependentes);