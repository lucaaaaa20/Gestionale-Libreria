//INTERFACCIA CHE PERMETTE LA VERIFICA CHE OGNI LIBRO PRESO O IMPOSTATO DA NOI ABBIA QUESTE VARIABILI

export interface Libro{
    isbn?: number,
    autore: string,
    titolo: string,
    descrizione: string
}