function App() {
  const [currentExercise, setCurrentExercise] = React.useState(null);

  const renderExercise = () => {
    switch (currentExercise) {
      case 'loci':
        return <LociExercise />;
      case 'nback':
        return <NBackExercise />;
      case 'sequence':
        return <SequenceExercise />;
      default:
        return (
          <div>
            <h2>Wähle eine Übung:</h2>
            <button onClick={() => setCurrentExercise('loci')}>Gedächtnispalast</button>
            <button onClick={() => setCurrentExercise('nback')}>N-Back</button>
            <button onClick={() => setCurrentExercise('sequence')}>Sequenztraining</button>
          </div>
        );
    }
  };

  return (
    <div className="container">
      <h1>Kurzzeitgedächtnis Trainer</h1>
      {renderExercise()}
    </div>
  );
}

function LociExercise() {
  const [items, setItems] = React.useState(['Apfel', 'Buch', 'Kerze']);
  const [step, setStep] = React.useState(0);
  const [answer, setAnswer] = React.useState('');
  const [score, setScore] = React.useState(0);

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === items[step].toLowerCase()) {
      setScore(score + 1);
    }
    setAnswer('');
    if (step < items.length - 1) {
      setStep(step + 1);
    } else {
      alert(`Fertig! Punkte: ${score}`);
      setStep(0);
      setScore(0);
    }
  };

  return (
    <div>
      <h2>Loci Methode</h2>
      <p>Merke dir die Position des folgenden Objekts in deinem Gedächtnispalast:</p>
      <h3>{items[step]}</h3>
      <input value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Objekt eingeben" />
      <button onClick={handleSubmit}>Bestätigen</button>
      <p className="score">Punkte: {score}</p>
    </div>
  );
}

function NBackExercise() {
  const sequence = ['A', 'B', 'A', 'C', 'B', 'C'];
  const [index, setIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);

  const handleYes = () => {
    if (index >= 2 && sequence[index] === sequence[index - 2]) {
      setScore(score + 1);
    }
    next();
  };

  const handleNo = () => {
    next();
  };

  const next = () => {
    if (index < sequence.length - 1) {
      setIndex(index + 1);
    } else {
      alert(`Fertig! Punkte: ${score}`);
      setIndex(0);
      setScore(0);
    }
  };

  return (
    <div>
      <h2>N-Back Training (2-back)</h2>
      <h3>{sequence[index]}</h3>
      <button onClick={handleYes}>Wiederholt</button>
      <button onClick={handleNo}>Neu</button>
      <p className="score">Punkte: {score}</p>
    </div>
  );
}

function SequenceExercise() {
  const [sequence, setSequence] = React.useState([1, 4, 3]);
  const [answer, setAnswer] = React.useState('');
  const [score, setScore] = React.useState(0);

  const handleSubmit = () => {
    if (answer === sequence.join('')) {
      setScore(score + 1);
    }
    setAnswer('');
    const nextSeq = [...sequence, Math.floor(Math.random() * 9) + 1];
    setSequence(nextSeq);
  };

  return (
    <div>
      <h2>Sequenztraining</h2>
      <h3>{sequence.join(' ')}</h3>
      <input value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Sequenz wiederholen" />
      <button onClick={handleSubmit}>Bestätigen</button>
      <p className="score">Punkte: {score}</p>
    </div>
  );
}

export default App;
