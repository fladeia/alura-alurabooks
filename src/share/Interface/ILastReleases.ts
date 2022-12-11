export interface ILastReleases {
  autor: number;
  categoria: number;
  descricao: string;
  id: number;
  imagemCapa: string;
  isbn: string;
  numeroPaginas: number;
  opcoesCompra: {
    formatos: string[];
    id: number;
    preco: number;
    titulo: string;
  }[];
  publicacao: string;
  slug: string;
  sobre: string;
  titulo: string;
}