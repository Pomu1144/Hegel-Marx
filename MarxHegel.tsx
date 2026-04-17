// ==========================================
// File: src/data/atlasGraph.ts
// ==========================================
export type Tradition = 'Hegel' | 'Marx';

export interface ConceptNode {
  id: string;
  title: string;
  tradition: Tradition;
  summary: string;
  plainEnglish: string;
  importance: string;
  keyTerms: string[];
  contrasts: string[];
  relatedConceptIds: string[];
  likelyExamQuestions: string[];
  commonMistakes: string[];
  argumentSteps: string[];
  x?: number;
  y?: number;
}

export const ATLA_GRAPH: Record<string, ConceptNode> = {
  'h-speculative-freedom': {
    id: 'h-speculative-freedom',
    title: 'Speculative Method & Genuine Freedom',
    tradition: 'Hegel',
    summary: 'The dialectical connection between thinking, willing, and freedom, demonstrating why merely "negative" freedom is inadequate and concrete freedom requires thought.',
    plainEnglish: 'Freedom isn’t just the ability to say "no" to everything or act randomly (negative freedom). Genuine freedom requires a rational will—you must think through your actions and align them with universal principles to be concretely free.',
    importance: 'Establishes the foundation for Hegel\'s entire political philosophy. It proves why thinking is required for genuine freedom, setting up the necessity of external institutions.',
    keyTerms: ['Speculative Method', 'Thinking', 'Willing', 'Negative Freedom', 'Concrete Freedom'],
    contrasts: ['Libertarian negative freedom', 'Arbitrary choice (Willkür)'],
    relatedConceptIds: ['h-abstract-right'],
    likelyExamQuestions: ['Explain the speculative method that Hegel employs to determine the nature of right, and how he connects thinking, willing, and genuine freedom.'],
    commonMistakes: [
      'Equating freedom purely with the lack of external constraints.',
      'Treating the speculative method as an abstract logic puzzle rather than the actualization of the free will.'
    ],
    argumentSteps: [
      'The will begins as purely subjective and capable of abstracting from any content (negative freedom).',
      'This negative freedom is inadequate because it remains empty and arbitrary.',
      'To achieve genuine freedom, the will must give itself rational content (concrete freedom).',
      'Therefore, thinking is required to recognize and universalize this rational content.'
    ],
    x: 20, y: 15
  },
  'h-abstract-right': {
    id: 'h-abstract-right',
    title: 'Person, Property & Right to Life',
    tradition: 'Hegel',
    summary: 'Property rights are the first external embodiment of the free will. They are not merely "natural," but involve thinking, making the right to life inalienable while rejecting slavery.',
    plainEnglish: 'You become a legal "person" by putting your will into physical things (property). Because this requires a rational will, property isn\'t just a biological instinct. This rational will makes slavery inherently contradictory and your life an inalienable right.',
    importance: 'Explains why Hegel starts his system with property, outlaws slavery philosophically (section 57), and establishes the limits of personal rights when facing the State (section 70).',
    keyTerms: ['Abstract Right', 'Property', 'Personhood', 'Inalienable Right', 'Sacrifice'],
    contrasts: ['Lockean natural property rights', 'Marxist critique of private property'],
    relatedConceptIds: ['h-speculative-freedom', 'h-civil-society'],
    likelyExamQuestions: ['Why does Hegel start with property rights, and how do they involve thinking rather than just natural instincts?'],
    commonMistakes: [
      'Assuming Hegel views property merely as a means for economic survival.',
      'Failing to understand why the right to life is inalienable yet the state can demand sacrifice.'
    ],
    argumentSteps: [
      'The free will must externalize itself to be objective.',
      'It claims external objects as its own through property.',
      'This requires mutual recognition among thinking persons.',
      'Because personality resides in the will, one cannot alienate their own will (slavery is illegitimate).',
      'However, abstract right is incomplete and requires higher ethical forms.'
    ],
    x: 40, y: 25
  },
  'h-civil-society': {
    id: 'h-civil-society',
    title: 'Civil Society & The State',
    tradition: 'Hegel',
    summary: 'Property alone cannot secure freedom; it requires the duties of Ethical Life, the proliferation of needs in Civil Society, and the ultimate actualization of concrete freedom in the State.',
    plainEnglish: 'The free market (civil society) creates a complex web of needs and work, organizing people into "estates." But this economic web isn\'t enough. To be truly free, you need a State that protects minority rights and gives your life higher ethical purpose.',
    importance: 'Critiques the liberal idea that the state is merely a referee for property. Details the necessity of corresponding duties, estates (section 207), and civil rights for religious minorities (section 270).',
    keyTerms: ['Ethical Life (Sittlichkeit)', 'Civil Society', 'Estates', 'Proliferation of Needs', 'The State', 'Religion'],
    contrasts: ['Marx’s base/superstructure model', 'Classical political economy (Smith/Ricardo)'],
    relatedConceptIds: ['h-abstract-right', 'm-alienation', 'm-historical-materialism'],
    likelyExamQuestions: ['Why does Hegel think that concrete freedom requires a state, and how does he treat civil rights for religious minorities?'],
    commonMistakes: [
      'Confusing Civil Society (the economic sphere) with the State (the ethical sphere).',
      'Believing Hegel thinks the State should enforce a single religion.'
    ],
    argumentSteps: [
      'Property rights create arbitrary conflicts.',
      'Civil society addresses human needs through political economy and estates, but remains divided by self-interest.',
      'True concrete freedom requires institutions that unify subjective desires with objective duties.',
      'The State serves as this actualization, ensuring rights, including religious pluralism.'
    ],
    x: 60, y: 15
  },
  'm-alienation': {
    id: 'm-alienation',
    title: 'Alienation & The New Materialism',
    tradition: 'Marx',
    summary: 'Marx critiques Hegel via a new materialism (contrasted with Feuerbach), defining human essence through labor and outlining how capitalism alienates workers across multiple dimensions.',
    plainEnglish: 'Hegel thought ideas run the world; Marx says material reality does. Unlike Feuerbach\'s passive materialism, Marx sees humans actively shaping reality through work. Capitalism ruins this by separating you from your product, your labor, your humanity, and others.',
    importance: 'Marks the philosophical break from German Idealism. Transitions focus from abstract "consciousness" to concrete human labor and suffering.',
    keyTerms: ['Alienated Labor', 'New Materialism', 'Human Essence', 'Feuerbach Critique'],
    contrasts: ['Hegelian idealism', 'Feuerbach’s old materialism'],
    relatedConceptIds: ['h-civil-society', 'm-historical-materialism'],
    likelyExamQuestions: ['Contrast the old materialism of Feuerbach with Marx’s new materialism, and explain how Marx conceives the human essence.'],
    commonMistakes: [
      'Reducing alienation to just "feeling sad at work" rather than a structural separation from species-being.',
      'Failing to distinguish Marx\'s active materialism from Feuerbach\'s passive materialism.'
    ],
    argumentSteps: [
      'Hegel views alienation as a failure of consciousness; Marx grounds it in material labor.',
      'Under capitalism, labor is forced, not free.',
      'The worker is alienated from the product, the process, their species-being, and other workers.',
      'Philosophy/religion merely reflect this suffering; only material change can resolve it.'
    ],
    x: 75, y: 40
  },
  'm-historical-materialism': {
    id: 'm-historical-materialism',
    title: 'Historical Materialism & Class Struggle',
    tradition: 'Marx',
    summary: 'The premise that modes of production form a base that dictates the ideological superstructure. Tensions between fettered productive forces and existing relations cause revolutionary transitions.',
    plainEnglish: 'History is driven by class war, not ideas. Technology and labor methods (forces) outgrow the legal/economic rules (relations). When the rules hold back the tech, society explodes into revolution, birthing a new class system.',
    importance: 'The core engine of Marxist theory (German Ideology, 1859 Preface, Manifesto). Explains why thought alone cannot change society and why the proletariat revolution is guaranteed.',
    keyTerms: ['Mode of Production', 'Productive Forces', 'Superstructure', 'Bourgeoisie', 'Proletariat', 'Fettering'],
    contrasts: ['Hegel’s speculative method of historical development'],
    relatedConceptIds: ['m-alienation', 'm-capital-value'],
    likelyExamQuestions: ['Explain why the fettering of new productive forces generates tensions within a society, leading to a new mode of production and superstructure.'],
    commonMistakes: [
      'Confusing "productive forces" (tools/tech/labor) with "mode of production" (the overall system like capitalism).',
      'Believing ideology changes the base, rather than the base generating the ideology.'
    ],
    argumentSteps: [
      'Humans produce their means of subsistence (premise of historical materialism).',
      'This creates specific productive forces and modes of production.',
      'The economic base generates a legal/political superstructure.',
      'Forces continue to develop until they are fettered by the existing relations.',
      'This contradiction manifests as class struggle, resolved only by revolution.'
    ],
    x: 85, y: 65
  },
  'm-capital-value': {
    id: 'm-capital-value',
    title: 'Value Theory & Capital Accumulation',
    tradition: 'Marx',
    summary: 'Capitalism is defined by commodity production. The labor theory of value explains exchange-value, while the unique commodity of labor power explains surplus value in the M-C-M\' circuit.',
    plainEnglish: 'A thing has use-value (it does something) and exchange-value (its price tag). Price is based on the socially necessary labor time to make it. Capitalists get rich (M-C-M\') by buying a magic commodity—human labor power—which creates more value than it costs to keep the worker alive.',
    importance: 'Provides the rigorous economic proof for the philosophical claims of exploitation and alienation made in Marx’s earlier works.',
    keyTerms: ['Commodity', 'Use-Value', 'Exchange-Value', 'Socially Necessary Labor Time', 'M-C-M\'', 'Labor Power'],
    contrasts: ['Classical subjective theories of value', 'Hegel’s abstract view of property exchange'],
    relatedConceptIds: ['m-historical-materialism'],
    likelyExamQuestions: ['Explain the puzzle of why M-C-M\' leads to the growth of capital, and how the purchase of labor power resolves this puzzle.'],
    commonMistakes: [
      'Equating use-value directly with exchange-value.',
      'Failing to specify that labor power adds MORE value than its own exchange-value.'
    ],
    argumentSteps: [
      'Wealth appears as an immense collection of commodities.',
      'Commodities have qualitative use-value and quantitative exchange-value.',
      'Exchange-value is determined by socially necessary labor time.',
      'Capital circulates as M-C-M\' (Money to Commodity to More Money).',
      'This surplus is only possible because capitalists buy "labor power", which produces more value than its own cost.'
    ],
    x: 70, y: 85
  }
};

// ==========================================
// File: src/App.tsx
// ==========================================
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Clock, X, ArrowRight } from 'lucide-react';

type ViewState = 'atlas' | 'compare' | 'exam' | 'builder';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('atlas');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-serif selection:bg-rose-900/50">
      <div className="flex h-screen overflow-hidden">
        <aside className="w-64 border-r border-[#2a2a2a] bg-[#121212] flex flex-col z-20">
          <div className="p-6 border-b border-[#2a2a2a]">
            <h1 className="text-xl font-bold tracking-tight text-[#f0e6d2]">
              Philosophy<br />
              <span className="text-amber-600/90 font-light">Argument Atlas</span>
            </h1>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <NavItem icon={<Network size={18} />} label="Concept Atlas" active={currentView === 'atlas'} onClick={() => setCurrentView('atlas')} />
            <NavItem icon={<Clock size={18} />} label="Exam Simulator" active={currentView === 'exam'} onClick={() => setCurrentView('exam')} />
          </nav>
        </aside>

        <main className="flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a]">
          {currentView === 'atlas' && <AtlasView />}
          {currentView === 'exam' && <ExamView />}
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-all duration-200 ${
        active 
          ? 'bg-[#2a2a2a] text-[#f0e6d2] border-l-2 border-amber-600/80' 
          : 'text-zinc-400 hover:bg-[#1a1a1a] hover:text-zinc-200'
      }`}
    >
      {icon}
      <span className="text-sm font-medium tracking-wide">{label}</span>
    </button>
  );
}

// ==========================================
// File: src/components/AtlasView.tsx
// ==========================================
function AtlasView() {
  const [selectedNode, setSelectedNode] = useState<ConceptNode | null>(null);

  const edges = Object.values(ATLA_GRAPH).flatMap(node => 
    node.relatedConceptIds.map(targetId => ({
      source: node,
      target: ATLA_GRAPH[targetId]
    })).filter(edge => edge.target)
  );

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 p-10">
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {edges.map((edge, i) => (
            <line
              key={i}
              x1={`${edge.source.x}%`}
              y1={`${edge.source.y}%`}
              x2={`${edge.target.x}%`}
              y2={`${edge.target.y}%`}
              stroke="#3a3a3a"
              strokeWidth="2"
              className="opacity-60"
            />
          ))}
        </svg>

        {Object.values(ATLA_GRAPH).map(node => (
          <motion.button
            key={node.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedNode(node)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-5 py-3 rounded-md border text-sm tracking-wide shadow-xl backdrop-blur-md transition-colors z-10 ${
              node.tradition === 'Hegel' 
                ? 'bg-amber-900/20 border-amber-700/60 text-amber-400 hover:bg-amber-900/40'
                : 'bg-rose-900/20 border-rose-700/60 text-rose-400 hover:bg-rose-900/40'
            }`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.title}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-[500px] bg-[#121212] border-l border-[#2a2a2a] shadow-2xl overflow-y-auto z-30"
          >
            <div className="p-8 space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <span className={`text-xs uppercase tracking-widest font-bold ${selectedNode.tradition === 'Hegel' ? 'text-amber-600' : 'text-rose-600'}`}>
                    {selectedNode.tradition}
                  </span>
                  <h2 className="text-2xl font-bold mt-1 text-[#f0e6d2]">{selectedNode.title}</h2>
                </div>
                <button onClick={() => setSelectedNode(null)} className="text-zinc-500 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              <section>
                <h3 className="text-xs uppercase text-zinc-500 mb-2 tracking-wider">The Concept</h3>
                <p className="text-zinc-300 leading-relaxed text-sm bg-[#1a1a1a] p-4 rounded-md border border-[#2a2a2a]">
                  {selectedNode.summary}
                </p>
              </section>

              <section>
                <h3 className="text-xs uppercase text-zinc-500 mb-2 tracking-wider">Plain English</h3>
                <p className="text-zinc-400 italic leading-relaxed text-sm">
                  "{selectedNode.plainEnglish}"
                </p>
              </section>

              <section>
                <h3 className="text-xs uppercase text-zinc-500 mb-2 tracking-wider">Argument Structure</h3>
                <div className="space-y-3">
                  {selectedNode.argumentSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start text-sm text-zinc-300">
                      <span className="text-amber-700 mr-3 mt-0.5"><ArrowRight size={14} /></span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2a2a2a]">
                <section>
                  <h3 className="text-xs uppercase text-zinc-500 mb-2 tracking-wider">Key Terms</h3>
                  <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
                    {selectedNode.keyTerms.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </section>
                <section>
                  <h3 className="text-xs uppercase text-zinc-500 mb-2 tracking-wider">Common Traps</h3>
                  <ul className="list-disc list-inside text-sm text-rose-500/80 space-y-1">
                    {selectedNode.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==========================================
// File: src/components/ExamView.tsx
// ==========================================
const EXAM_QUESTIONS = [
  "Explain the 'speculative' method that Hegel employs to determine the nature of right. How does he connect thinking, willing, and genuine freedom?",
  "Why does Hegel start with property rights, and how do they involve thinking (making them not merely 'natural')? Include his views on slavery and the inalienable right to life.",
  "Why does Hegel think that concrete freedom requires a state? Address why property rights are insufficient, the role of civil society, and civil rights for religious minorities.",
  "Contrast the old materialism of Feuerbach with Marx's new materialism. How does Marx conceive the human essence, and how does he develop alienation tied to laboring?",
  "Outline the premises of the German Ideology that support historical materialism. Contrast a mode of production with a productive force, and explain why thought alone cannot cause social change.",
  "Explain the puzzle of why M-C-M' leads to the growth of capital. Provide the explanation in terms of the capitalist's purchase of labor power as a commodity."
];

function ExamView() {
  const [started, setStarted] = useState(false);
  const [selectedQs, setSelectedQs] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(80 * 60); // 80 minutes constraint
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    if (!started || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const toggleQuestion = (idx: number) => {
    if (selectedQs.includes(idx)) {
      setSelectedQs(selectedQs.filter(i => i !== idx));
    } else if (selectedQs.length < 3) {
      setSelectedQs([...selectedQs, idx]);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (!started) {
    return (
      <div className="p-12 max-w-4xl mx-auto h-full overflow-y-auto">
        <h2 className="text-3xl font-bold text-[#f0e6d2] mb-2">Test #2 Simulator</h2>
        <p className="text-zinc-400 mb-6 border-b border-[#2a2a2a] pb-4">Prof. Pincock | PHIL 3250 | Total: 250 Points</p>
        
        <div className="bg-[#121212] p-6 rounded-lg border border-[#2a2a2a] mb-8 shadow-lg">
          <h3 className="text-amber-600 font-semibold mb-3 tracking-wide uppercase text-sm">Exam Parameters</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 text-sm">
            <li><strong>Format:</strong> Closed book, no notes.</li>
            <li><strong>Time Limit:</strong> 80 minutes to complete the test.</li>
            <li><strong>Selection:</strong> Pick exactly 3 out of 6 questions.</li>
            <li><strong>Scoring:</strong> Each question is worth 85 points (Max 255/250 points).</li>
            <li><strong>Grading Criteria:</strong> Graded on clarity of philosophical terms and arguments.</li>
          </ul>
        </div>

        <div className="space-y-4 mb-8">
          {EXAM_QUESTIONS.map((q, idx) => (
            <div 
              key={idx}
              onClick={() => toggleQuestion(idx)}
              className={`p-5 rounded border cursor-pointer transition-all duration-200 ${
                selectedQs.includes(idx) 
                  ? 'bg-[#1a1a1a] border-amber-600/70 shadow-[0_0_20px_rgba(217,119,6,0.15)]' 
                  : 'bg-[#0a0a0a] border-[#2a2a2a] hover:border-zinc-500'
              }`}
            >
              <div className="flex items-start">
                <div className={`w-5 h-5 rounded border mr-4 flex-shrink-0 flex items-center justify-center mt-0.5 ${selectedQs.includes(idx) ? 'border-amber-500 bg-amber-500/20 text-amber-500' : 'border-zinc-600'}`}>
                  {selectedQs.includes(idx) && <span className="text-xs font-bold">✓</span>}
                </div>
                <p className={`text-sm leading-relaxed ${selectedQs.includes(idx) ? 'text-[#f0e6d2]' : 'text-zinc-400'}`}>{q}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          disabled={selectedQs.length !== 3}
          onClick={() => setStarted(true)}
          className="w-full py-4 bg-zinc-800 hover:bg-amber-900/60 text-[#f0e6d2] font-semibold rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {selectedQs.length === 3 ? 'Begin 80-Minute Exam' : `Select ${3 - selectedQs.length} more questions to begin`}
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-[#0a0a0a]">
      <header className="px-8 py-5 bg-[#121212] border-b border-[#2a2a2a] flex justify-between items-center shadow-md">
        <div>
          <h2 className="text-lg font-bold text-[#f0e6d2]">Examination Environment</h2>
          <p className="text-xs text-zinc-500 mt-1">Focus on conceptual clarity and argument structure.</p>
        </div>
        <div className={`text-3xl font-mono tracking-tight ${timeLeft < 600 ? 'text-rose-500 animate-pulse' : 'text-amber-500'}`}>
          {formatTime(timeLeft)}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
          {selectedQs.map((qIdx, i) => (
            <div key={qIdx} className="space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-amber-900/30 text-amber-500 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">Essay {i + 1}</span>
                <span className="text-zinc-500 text-xs uppercase tracking-wider">85 Points</span>
              </div>
              <p className="text-zinc-200 text-lg leading-relaxed font-medium">{EXAM_QUESTIONS[qIdx]}</p>
              <textarea
                value={answers[qIdx] || ''}
                onChange={e => setAnswers({...answers, [qIdx]: e.target.value})}
                placeholder="Formulate your philosophical argument..."
                className="w-full h-96 bg-[#121212] border border-[#2a2a2a] rounded-md p-6 text-zinc-300 focus:outline-none focus:border-amber-700/60 focus:ring-1 focus:ring-amber-700/50 resize-y leading-relaxed font-serif text-lg transition-colors"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
