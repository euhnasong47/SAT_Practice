interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function Navigation({ onPrevious, onNext }: NavigationProps) {
  return (
    <div className="buttons">
      <button onClick={onPrevious}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}