import { GoogleSpreadsheet } from'google-spreadsheet'

import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1GN7Y73p6bvDEbo44JeaquRiClTTE4HwkrboAY8ImI3w')


export default async(req, res) => {
   
    try{
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        
        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')//Essa linha aqui voce vai pegar as informacoes das colunas da planilha. Nesse caso peguei a coluna A2 e B2
        
        const mostrarPromocaoCell = sheet.getCell(1, 0)// Aqui estou pegando da planilha a linha 1 coluna 0
        
        const textoCell = sheet.getCell(1, 1)// Aqui estou pegando da planilha a linha 1 coluna 1 o Texto da promocao
        
        res.end(JSON.stringify({
            showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO' ,
            message: textoCell.value
        }))
    
        } catch (err) {
            res.end(JSON.stringify({
                showCoupon: false,
                message:''
        }))
    }

}