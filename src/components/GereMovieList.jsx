import GeresList from "../Constants/GenresList.jsx";
import MovieList from "./MovieList.jsx";
const GereMovieList = () => {
  return (
    <div>
      {GeresList.map(
        (item, index) =>
          // ជាលក្ខណៈថា index <= 4 ដើម្បីបង្ហាញតែ​ 5 items (index 0 ដល់ 4)
          index <= 4 && (
            <div
              key={index}
              className="p-8 px-8 md:px-10 text-white text-[20px] font-bold "
            >
              {item.name}
              {/* បង្ហាញ MovieList ដែលទាក់ទងនឹង genreId 
                  ប្រើ genreId ដើម្បីទាញយកភាពយន្តដែលមាន genreId នេះ*/}
              <MovieList genreId={item.id} />
            </div>
          )
      )}
    </div>
  );
};

export default GereMovieList;
