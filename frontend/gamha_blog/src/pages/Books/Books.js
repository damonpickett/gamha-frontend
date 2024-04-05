import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Books.css";
import banner from "../../assets/images/books-page-1280x720.jpg";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch book data from API using Axios
    axios
      .get("https://api.example.com/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".page-fade-in-transition").style.opacity = 1;
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in-transition">
      <div className="banner">
        <div className="books-overlay-text">
          <h1>Books</h1>
        </div>
      </div>

      <div className="books-content shared-wrapping shared-padding">
        <div className="shared-title">
          <h1>Books</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac eros
          at sapien elementum convallis. Proin ac fermentum justo. Integer
          facilisis mi vitae fermentum consequat. Maecenas euismod ultricies
          nunc, nec hendrerit dolor efficitur a. Integer sit amet tincidunt
          tortor, vitae pharetra dui. Vivamus ac nunc sed mi suscipit blandit
          eget eget sapien. Nullam congue sollicitudin sem, in fermentum urna
          vestibulum sed. Quisque finibus sodales enim, nec faucibus magna
          congue nec. Ut congue purus nec semper placerat. Nullam rhoncus massa
          et dolor facilisis tincidunt. Sed consectetur congue risus, eget
          rutrum lectus lacinia sit amet. Mauris quis viverra arcu, non viverra
          nisi. Duis scelerisque mi ac mauris eleifend, vitae dapibus justo
          scelerisque. Nulla facilisi. Proin ultrices ligula odio, nec varius
          orci vestibulum vel. Duis congue scelerisque malesuada. Vestibulum a
          nulla bibendum, rhoncus ipsum in, gravida leo. Sed et velit non elit
          euismod eleifend et in sapien. Curabitur nec est velit. Aliquam id
          justo nec turpis consectetur ullamcorper. Fusce volutpat sapien nec
          justo tristique, at hendrerit orci scelerisque. Aliquam tempor sapien
          nec risus suscipit, vitae eleifend dolor volutpat. Mauris et ante ex.
          Cras tempus arcu non laoreet consectetur. Phasellus convallis lectus
          vel tempus malesuada. Sed ultricies ex et quam egestas hendrerit.
          Donec tempor dui vel quam pharetra, eu pharetra sapien laoreet. Sed in
          erat rhoncus, aliquam velit ac, mattis dui. Aenean eget ante accumsan,
          fringilla metus sed, ullamcorper metus. Mauris mattis lacinia metus eu
          interdum. Phasellus fringilla eros et orci tincidunt, vel dapibus
          nulla feugiat. Nam blandit, mi eu placerat congue, tortor ipsum varius
          velit, at mattis est tortor ac nulla. Mauris sed mauris quis turpis
          gravida pharetra nec ac mauris. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Vivamus
          vulputate semper est. Duis id eros pretium, mollis erat a, mattis
          nisi. Donec euismod massa id tellus bibendum, at sagittis lectus
          vulputate. Duis lacinia velit a dapibus accumsan. Nullam et nulla
          risus. Nullam eget metus et felis fringilla consectetur non ac leo.
          Cras nec tortor vitae sapien dignissim vulputate. Morbi eget leo eu
          mauris rhoncus posuere id in odio. Nam nec risus odio. Donec non mi id
          ex scelerisque varius. Donec lobortis dolor eget velit laoreet, sed
          fringilla nulla volutpat. Sed interdum, mauris quis consequat posuere,
          neque libero interdum dolor, id commodo magna lacus nec leo. Ut id
          libero convallis, scelerisque odio a, aliquet libero. Maecenas varius
          vestibulum est, nec pellentesque elit consectetur a. Morbi euismod dui
          ac risus malesuada scelerisque. Ut feugiat, libero eget faucibus
          efficitur, odio nisi rhoncus odio, nec mattis elit sapien non mi. Ut
          hendrerit lorem eget nisi faucibus, in scelerisque tortor fermentum.
          Curabitur vel magna in nulla efficitur vestibulum. Nullam quis rhoncus
          libero. Integer feugiat tristique felis vel interdum. Suspendisse
          potenti. Nulla facilisi. Donec vitae odio nec sem aliquam tempus.
          Proin dignissim dolor velit, eu hendrerit justo volutpat ac. Curabitur
          fringilla pharetra massa, ac dapibus dolor mollis ac. Donec nec lectus
          vitae elit viverra varius.
        </p>

        <p>
          Suspendisse potenti. Donec pretium, lacus nec sollicitudin dignissim,
          felis libero aliquet risus, in vehicula felis lacus vitae nunc. Ut vel
          magna ut nunc tincidunt consequat. Integer vitae diam at felis
          ultricies varius. Morbi condimentum mi nec efficitur tempor. Sed eget
          sapien dui. Morbi et semper arcu, eget facilisis lacus. Phasellus nec
          dui in elit rhoncus efficitur eget ac risus. Nulla aliquam tincidunt
          dolor, at mattis purus. Mauris nec eros a justo molestie luctus.
          Maecenas in dolor pharetra, placerat mauris in, vehicula quam. Donec
          sit amet dictum nisi. Aenean ut velit a velit ullamcorper tempus.
          Vestibulum ac est in eros eleifend ullamcorper vel sit amet turpis.
          Donec nec ultrices dui, sit amet gravida ante. Nullam varius dapibus
          magna eget efficitur. Donec ut efficitur mi.
        </p>

        <p>
          Proin vel sem eget neque vehicula vehicula vitae non nunc. Duis nec
          lorem vitae dolor vestibulum finibus. Ut vel consequat nibh.
          Pellentesque consequat ipsum at magna tincidunt, sed tincidunt justo
          convallis. Donec aliquam nisi vel odio sodales commodo. Nam accumsan
          tempor orci, ut vestibulum sapien. Curabitur tincidunt efficitur
          libero. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Aliquam erat volutpat. Nam rhoncus
          metus at felis feugiat, nec gravida mauris dapibus. Phasellus viverra
          metus velit, nec tempus nulla consequat at. Vestibulum vehicula ex nec
          nibh facilisis, sit amet lobortis ligula condimentum. Sed ac magna nec
          purus fermentum ullamcorper. Pellentesque non velit hendrerit,
          ullamcorper enim nec, aliquam enim. Fusce eu tincidunt neque, in
          maximus lorem.
        </p>

        <div className="book-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.coverImageUrl} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
