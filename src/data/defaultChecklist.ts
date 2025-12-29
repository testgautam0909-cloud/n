import { ChecklistSection } from '../types/checklist';

export const defaultChecklistData: ChecklistSection[] = [
  {
    id: 'branch',
    title: '🏷️ Branch Naming',
    items: [
      {
        id: 'branch-1',
        text: 'Format: feature/<notionId>-<short-title> or bug/<notionId>-<short-title>',
      },
      { id: 'branch-2', text: 'No spaces or underscores' },
      { id: 'branch-3', text: 'Concise and descriptive' },
    ],
    examples: {
      good: [
        'feature/1234-outreach-status-card',
        'bug/5678-fix-patient-filter',
        'feature/9012-add-export-button',
      ],
      bad: [
        'feature_new_card (no notion ID, uses underscore)',
        'fix bug (no structure, spaces)',
        'feature/add new feature (spaces, not descriptive)',
      ],
    },
  },
  {
    id: 'api',
    title: '🧱 API / Contract Handling',
    items: [
      {
        id: 'api-1',
        text: 'Created contract (mock API or TypeScript interface) if backend not ready',
      },
      { id: 'api-2', text: 'Node mock API serves contract data locally' },
      { id: 'api-3', text: 'Data structure matches backend expectations' },
      { id: 'api-4', text: 'Contracts stored in /contracts or /mocks folder' },
      { id: 'api-5', text: 'Minimal refactoring needed when backend is ready' },
    ],
    codeExample: `// contracts/patient.contract.ts
export interface PatientResponse {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  lastVisit: string;
}

export const mockPatientData: PatientResponse[] = [
  {
    id: '1',
    name: 'John Doe',
    status: 'active',
    lastVisit: '2024-01-15'
  }
];`,
  },
  {
    id: 'code',
    title: '⚙️ Code Quality & Architecture',
    items: [
      { id: 'code-1', text: 'Components are small, focused, and reusable' },
      {
        id: 'code-2',
        text: 'React Query best practices followed (query keys, loading/error states)',
      },
      { id: 'code-3', text: 'Code is readable: meaningful names, short functions' },
      { id: 'code-4', text: 'No code duplication — reused hooks/components/utilities' },
      { id: 'code-5', text: 'Components are pure and stateless where possible' },
      { id: 'code-6', text: 'Avoided unnecessary re-renders (memo, useCallback, useMemo)' },
    ],
    codeExample: `// Good: Small, focused, single responsibility
interface PatientCardProps {
  patient: Patient;
  onSelect: (id: string) => void;
}

export const PatientCard = ({ patient, onSelect }: PatientCardProps) => {
  return (
    <div className="patient-card" onClick={() => onSelect(patient.id)}>
      <h3>{patient.name}</h3>
      <StatusBadge status={patient.status} />
    </div>
  );
};`,
  },
  {
    id: 'performance',
    title: '🧠 Performance & Optimization',
    items: [
      { id: 'perf-1', text: 'Heavy components lazy loaded' },
      { id: 'perf-2', text: 'Unnecessary API calls avoided (React Query caching used)' },
      { id: 'perf-3', text: 'Large lists optimized (virtualization if needed)' },
      { id: 'perf-4', text: 'Logic split into custom hooks for clarity and reuse' },
    ],
    codeExample: `// Good: Lazy load heavy components
import { lazy, Suspense } from 'react';

const PatientChart = lazy(() => import('./PatientChart'));

export const Dashboard = () => (
  <Suspense fallback={<ChartSkeleton />}>
    <PatientChart />
  </Suspense>
);`,
  },
  {
    id: 'stability',
    title: '🔒 Stability / Compatibility',
    items: [
      { id: 'stab-1', text: 'Existing features not broken — tested related pages/components' },
      { id: 'stab-2', text: 'Followed existing code conventions and naming patterns' },
      { id: 'stab-3', text: 'Maintained consistent folder structure and imports' },
    ],
  },
  {
    id: 'testing',
    title: '🧪 Testing',
    items: [
      { id: 'test-1', text: 'Wrote logical test cases for new components' },
      { id: 'test-2', text: 'Unit tests with React Testing Library' },
      { id: 'test-3', text: 'Mocked APIs with MSW (if used)' },
      { id: 'test-4', text: 'Tested edge cases (loading, error, empty states)' },
      { id: 'test-5', text: "Tests don't depend on unstable UI" },
      { id: 'test-6', text: 'Followed "AAA pattern" (Arrange, Act, Assert)' },
    ],
    codeExample: `describe('PatientCard', () => {
  it('should render patient name', () => {
    // Arrange
    const mockPatient = { id: '1', name: 'John Doe', status: 'active' };
    render(<PatientCard patient={mockPatient} onSelect={jest.fn()} />);
    
    // Act & Assert
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});`,
  },
  {
    id: 'review',
    title: '💎 Code Review Standards',
    items: [
      { id: 'rev-1', text: 'Checked naming, lint, formatting' },
      { id: 'rev-2', text: 'Removed unused imports/console logs' },
      { id: 'rev-3', text: 'No inline styles or hardcoded text unless necessary' },
      { id: 'rev-4', text: 'Code reads like a story — clean, logical flow' },
      { id: 'rev-5', text: 'Commit messages are clear and meaningful' },
    ],
    examples: {
      good: [
        'feat: add patient status filter to dashboard',
        'fix: resolve infinite loop in appointment query',
        'refactor: extract patient card component',
      ],
      bad: ['update', 'fix bug', 'changes', 'wip'],
    },
  },
  {
    id: 'tooling',
    title: '🧰 Tooling / Quality',
    items: [
      { id: 'tool-1', text: 'Ran lint + prettier before commit' },
      { id: 'tool-2', text: 'TypeScript strict typing used (unknown > any)' },
      { id: 'tool-3', text: 'Followed ESLint and Prettier rules' },
      { id: 'tool-4', text: 'Used environment variables for config (no hardcoded values)' },
    ],
  },
  {
    id: 'docs',
    title: '🧭 Documentation',
    items: [
      { id: 'doc-1', text: 'Added JSDoc/comments for complex logic' },
      { id: 'doc-2', text: 'Documented contracts, query keys, and props' },
      { id: 'doc-3', text: 'Updated Notion or internal wiki if relevant' },
    ],
  },
  {
    id: 'mindset',
    title: '🧑‍💻 Developer Mindset',
    items: [
      { id: 'mind-1', text: 'Thought about scale and future use' },
      { id: 'mind-2', text: "Didn't over-engineer" },
      { id: 'mind-3', text: 'Built consistent, predictable patterns' },
      { id: 'mind-4', text: 'Prioritized maintainability over cleverness' },
    ],
  },
];

/* 

data need to add

{
  id: 'domain',
  title: '🧠 Domain Modeling & State Clarity',
  items: [
    {
      id: 'domain-1',
      text: 'Each domain concept (Call, SMS, etc.) has a clear, explicit representation (type, enum, or component)'
    },
    {
      id: 'domain-2',
      text: 'Avoided inferring domain meaning from boolean combinations'
    },
    {
      id: 'domain-3',
      text: 'Invalid or impossible states are not representable in code'
    },
    {
      id: 'domain-4',
      text: 'Different workflows (e.g., Call vs SMS) are not merged unless behavior is truly identical'
    },
    {
      id: 'domain-5',
      text: 'Success, failure, and partial states are explicitly modeled (not implied)'
    }
  ],
  codeExample: `// Good: explicit domain modeling
type CommunicationType = 'CALL' | 'SMS';

type CallState =
  | 'FAILED'
  | 'EMPTY_TRANSCRIPT'
  | 'SUCCESS';

// Bad: implicit domain logic
const isUnsuccessfulCall =
  !isFailed && !isSMSFailed && isEmptyTranscript;`
}



{
  id: 'conditions',
  title: '🔀 Conditional Complexity',
  items: [
    {
      id: 'cond-1',
      text: 'No more than 2–3 boolean conditions per render branch'
    },
    {
      id: 'cond-2',
      text: 'Nested ternaries avoided in favor of early returns or switch statements'
    },
    {
      id: 'cond-3',
      text: 'Condition names clearly describe business meaning, not implementation detail'
    },
    {
      id: 'cond-4',
      text: 'Complex condition logic extracted into named helpers or state derivation functions'
    }
  ],
  codeExample: `// Good
switch (callState) {
  case 'FAILED':
    return <CallFailed />;
  case 'EMPTY_TRANSCRIPT':
    return <EmptyCall />;
  case 'SUCCESS':
    return <Transcript />;
}

// Bad
isSMSFailed ? ... : isFailed ? ... : isUnsuccessfulCall ? ... : ...`
}



{
  id: 'boundaries',
  title: '🧩 Component Responsibility & Boundaries',
  items: [
    {
      id: 'bound-1',
      text: 'Component has a single, clearly defined responsibility'
    },
    {
      id: 'bound-2',
      text: 'Component does not represent multiple domain concepts at once'
    },
    {
      id: 'bound-3',
      text: 'If behavior diverges, components are split rather than conditionally branched'
    },
    {
      id: 'bound-4',
      text: 'Shared UI is extracted only after duplication is proven'
    }
  ],
  examples: {
    good: [
      'CallInfoContent vs SMSInfoContent',
      'Separate ErrorState components'
    ],
    bad: [
      'One component with many isX flags',
      'Domain switching inside JSX'
    ]
  }
}



{
  id: 'state',
  title: '📐 State Derivation & Data Flow',
  items: [
    {
      id: 'state-1',
      text: 'Derived state is computed once and reused'
    },
    {
      id: 'state-2',
      text: 'Derived state has a single source of truth'
    },
    {
      id: 'state-3',
      text: 'Avoided duplicating state logic across components'
    },
    {
      id: 'state-4',
      text: 'Data shape matches UI needs (minimal transformation in render)'
    }
  ],
  codeExample: `// Good
const callState = deriveCallState(status, transcripts);

// Bad
const isFailed = ...
const isEmpty = ...
const isUnsuccessful = ...`
}




{
  id: 'smells',
  title: '👃 Code Smell Detection',
  items: [
    {
      id: 'smell-1',
      text: 'Multiple booleans used to represent a single concept'
    },
    {
      id: 'smell-2',
      text: 'Component logic requires comments to explain why conditions exist'
    },
    {
      id: 'smell-3',
      text: 'Adding a new case would require touching many conditionals'
    },
    {
      id: 'smell-4',
      text: 'Logic feels harder to read than to write'
    }
  ]
}







*/
