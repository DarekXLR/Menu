import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun',
        author: "Jan Nowak",
        text: "111Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates commodi, recusandae porro, provident neque molestias inventore error possimus, tempore hic qui harum reprehenderit nemo quibusdam similique rerum nulla pariatur ut."
    },
    {
        id: 2,
        title: 'Czym jest paradoks ferniego',
        author: "Ania Kwiatkowska",
        text: "22Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates commodi, recusandae porro, provident neque molestias inventore error possimus, tempore hic qui harum reprehenderit nemo quibusdam similique rerum nulla pariatur ut."
    },
    {
        id: 3,
        title: 'Ciemna materia i ciemna energia?',
        author: "Piotr Kowalski",
        text: "333Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates commodi, recusandae porro, provident neque molestias inventore error possimus, tempore hic qui harum reprehenderit nemo quibusdam similique rerum nulla pariatur ut."
    },
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;