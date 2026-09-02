export const SOCIALS = {
  github: 'https://github.com/sivajisj',
  linkedin: 'https://www.linkedin.com/in/sivaji-gadidala-b712ba221',
  twitter: 'https://x.com/sjtweets0',
  email: 'sivajigsivajig703@gmail.com',
  whatsapp: 'https://wa.me/917032891144',
}

export const PHONE = '+91 7032891144'

export const RESUME_LINK =
  'https://drive.google.com/file/d/1ZMpgEwxqweslYVxO-N3I3gS5PYvfgnGX/view?usp=sharing'

export const ROLES = [
  'Blockchain Engineer',
  'Rust Backend Developer',
  'Smart Contract Developer',
  'Solana & EVM Developer',
]

export const EXPERIENCE = [
  {
    role: 'Full Stack Blockchain Engineer',
    company: 'Simreka Softwares Pvt. Ltd.',
    period: 'Aug 2024 – Present',
    highlights: [
      'Building DePIN protocols on Solana using Anchor — trustless uptime proofs with automated on-chain reward distribution',
      'Shipping EVM smart contracts (Solidity, Hardhat, OpenZeppelin v5): lending protocols, voting systems, cross-chain bridges',
      'Designing async Rust microservices (Axum, Tokio, SQLx) for transaction queuing and multi-chain status tracking',
    ],
  },
  {
    role: 'Blockchain Developer Intern',
    company: 'Octaverse LLP',
    period: 'Prior',
    highlights: [
      'Developed and deployed Solidity smart contracts for DeFi and NFT use cases',
      'Integrated Web3 frontends using ethers.js and MetaMask',
    ],
  },
]

export const SKILL_GROUPS = [
  {
    title: 'Blockchain & Smart Contracts',
    items: ['Solidity', 'Rust', 'Anchor', 'Solana', 'Ethereum / EVM'],
  },
  {
    title: 'Blockchain Tooling',
    items: ['Hardhat', 'Foundry', 'OpenZeppelin v5', 'ethers.js v6', 'web3.js'],
  },
  {
    title: 'Rust Backend',
    items: ['Axum', 'Tokio', 'Serde', 'SQLx', 'gRPC / tonic'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Infrastructure',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'WebSockets'],
  },
  {
    title: 'Tools',
    items: ['Docker', 'Git', 'Solana CLI', 'MetaMask', 'Linux'],
  },
]

export const PROJECTS = [
  {
    title: 'Invoice Payment Service',
    description:
      'Production-grade multi-tenant invoicing API built in Rust (edition 2024). Features pluggable payment providers, transactional outbox pattern for guaranteed webhook delivery, idempotency keys to prevent duplicate charges, and HMAC-signed webhook callbacks. Full OpenAPI/Swagger docs, Docker-composed PostgreSQL 16, and 55 integration tests covering auth, idempotency, and multi-tenant isolation.',
    tags: ['Rust', 'Axum', 'SQLx', 'PostgreSQL', 'Docker', 'OpenAPI'],
    repo: 'https://github.com/sivajisj/invoice-payment-service',
    demo: 'https://drive.google.com/file/d/1Sibp4zHGQ9gV_THmLuHZiu6sgOq4Y4_9/view?usp=drivesdk',
    featured: true,
  },
  {
    title: 'RouterPulse — DePIN Uptime Protocol',
    description:
      'Full-stack DePIN network on Solana where routers prove uptime via device-key signed heartbeats. On-chain Anchor 1.0 program computes per-epoch scores (+1 on-time, −10 late), distributes SPL token rewards, enforces collateral staking and slash penalties, and applies cliff+linear vesting. NestJS API layer with Redis pub/sub, Next.js 15 dashboard, Sign-In with Solana (SIWS) auth, and on-chain RBAC.',
    tags: ['Solana', 'Anchor 1.0', 'Rust', 'DePIN', 'NestJS', 'Next.js 15', 'Redis'],
    repo: 'https://github.com/sivajisj/RouterPulse-Depin-Protocol',
    featured: true,
  },
  {
    title: 'NFT Minting Platform',
    description:
      'Gas-optimised ERC-721A NFT collection deployed and verified on Sepolia. Supports batch minting up to 10/tx, Merkle-tree allowlist (32-byte root, proof-verified on-chain), ERC-2981 royalty standard (5%), and a reveal pattern with a placeholder URI. Comprehensive Foundry test suite including fuzz tests and invariant checks. Guarded by OpenZeppelin ReentrancyGuard and Ownable.',
    tags: ['Solidity', 'ERC-721A', 'Foundry', 'Sepolia', 'OpenZeppelin', 'Merkle Proof'],
    repo: 'https://github.com/sivajisj/nft-mint-platform',
    explorer: 'https://sepolia.etherscan.io/address/0x1d24fe1860f4e670afd65c1b93118a4b4f5c0f54',
    featured: true,
  },
  {
    title: 'Cross-Chain Token Bridge',
    description:
      'ERC-20 lock-and-mint bridge between Sepolia and Polygon Amoy — both contracts deployed and Etherscan-verified. Deterministic nonces prevent replay attacks; emergency pause and CEI pattern guard against exploits. Event-driven Node.js relayer (ethers.js v6) listens for lock events on the source chain and triggers mints on the destination. React frontend with MetaMask integration. 7 comprehensive Hardhat tests.',
    tags: ['Solidity 0.8.28', 'ethers.js v6', 'Hardhat', 'Sepolia', 'Polygon Amoy', 'React'],
    repo: 'https://github.com/sivajisj/cross-chain-bridge',
    featured: true,
  },
  {
    title: 'DeFi Lending Protocol',
    description:
      'Permissionless over-collateralized lending: deposit, borrow, repay, interest accrual, and on-chain liquidation logic with price feed integration.',
    tags: ['Solidity', 'DeFi', 'Hardhat', 'OpenZeppelin v5'],
    repo: 'https://github.com/sivajisj/defi-lending-protocol-v2',
    featured: false,
  },
  {
    title: 'Decentralized Voting Board',
    description:
      'On-chain voting platform where vote counts are read live from smart contracts — eliminating tampering. Admin dashboard + MetaMask wallet-gated voter flow, JWT auth in httpOnly cookies.',
    tags: ['Solidity', 'Next.js', 'TypeScript', 'MetaMask', 'MongoDB'],
    repo: 'https://github.com/sivajisj/voting-board',
    featured: false,
  },
  {
    title: 'Solana On-Chain Movie Review Program',
    description:
      'Anchor program storing and updating movie reviews on-chain with PDA-based account derivation.',
    tags: ['Solana', 'Anchor', 'PDAs', 'Rust'],
    repo: 'https://github.com/sivajisj/movie-review-system/tree/main/anchor-movie-review-program',
    featured: false,
  },
  {
    title: 'Metaplex NFT Minting Program',
    description:
      'NFT minting program using Metaplex on Solana, deployed and verified on devnet.',
    tags: ['Solana', 'Metaplex', 'NFT', 'Rust'],
    repo: 'https://github.com/sivajisj/solana-web3js-development/tree/master/nft-with-metaplex',
    explorer:
      'https://explorer.solana.com/address/b5hqtPUsLTBvWM3qryPgm7PCYBNoSDVxXpzysEMCtrw?cluster=devnet',
    featured: false,
  },
]
