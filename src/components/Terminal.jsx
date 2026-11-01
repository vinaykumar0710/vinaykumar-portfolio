import { useEffect, useState } from 'react';
import './Terminal.css';

const commands = [
  {
    command: 'terraform plan',
    output: 'Infrastructure configuration validated',
  },
  {
    command: 'docker build -t app:v1 .',
    output: 'Docker image built successfully',
  },
  {
    command: 'kubectl apply -f deployment.yaml',
    output: 'Deployment configuration applied',
  },
  {
    command: 'kubectl rollout status deployment/app',
    output: 'Deployment successfully rolled out',
  },
];

export default function Terminal() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState('');
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let timeout;

    if (step >= commands.length) {
      timeout = setTimeout(() => {
        setStep(0);
        setTyped('');
        setCompleted([]);
      }, 3500);

      return () => clearTimeout(timeout);
    }

    const currentCommand = commands[step].command;

    if (typed.length < currentCommand.length) {
      timeout = setTimeout(() => {
        setTyped(currentCommand.slice(0, typed.length + 1));
      }, 55);
    } else {
      timeout = setTimeout(() => {
        setCompleted(previous => [...previous, step]);
        setStep(previous => previous + 1);
        setTyped('');
      }, 850);
    }

    return () => clearTimeout(timeout);
  }, [step, typed]);

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="control-red"></span>
          <span className="control-yellow"></span>
          <span className="control-green"></span>
        </div>
        <span className="terminal-title">vinay@devops:~</span>
      </div>

      <div className="terminal-body">
        <p className="terminal-comment">
          # Infrastructure &amp; deployment workflow
        </p>

        {completed.map(index => (
          <div className="terminal-command" key={commands[index].command}>
            <div className="command-line">
              <span className="terminal-prompt">vinay@devops:~$</span>
              <span className="command-text">{commands[index].command}</span>
            </div>
            <p className="terminal-success">
              <span>✓</span> {commands[index].output}
            </p>
          </div>
        ))}

        {step < commands.length && (
          <div className="terminal-command">
            <div className="command-line">
              <span className="terminal-prompt">vinay@devops:~$</span>
              <span className="command-text">{typed}</span>
              <span className="terminal-cursor">▋</span>
            </div>
          </div>
        )}

        {step >= commands.length && (
          <p className="terminal-status">
            SYSTEM STATUS: OPERATIONAL
          </p>
        )}
      </div>
    </div>
  );
}
