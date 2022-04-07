interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}
interface ContentProps {
  selectedGenreId: number;
  selectedGenre: GenreResponseProps;
}
export const Header = ({ selectedGenre }: ContentProps) => {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
};
