'use client';

interface HeaderProps {
  score: number;
}

export default function Header({ score }: HeaderProps): React.JSX.Element {
  const balance = score / 1000;  // Calculate balance based on the score

  return (
    <div>
      <div className="flex justify-between items-center mt-4 mb-4">
        <div className="bg-[#2e3248] rounded-full px-4 py-2 flex items-center">
          <span className="text-green-400 mr-2">⚡</span>
          <span className="font-bold">ugshsvhjk</span>
          <span className="font-bold">$flx</span>
        </div>

        <div className="bg-[#2e3248] rounded-full px-4 py-2 flex items-center">
          <span className="text-yellow-400 mr-2">🪙</span>
          <span className="font-bold">{balance.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
