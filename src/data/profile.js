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
    title: 'RouterPulse — DePIN Uptime Protocol',
    description:
      'Trustless Wi-Fi router uptime tracking on Solana. Routers submit signed heartbeat transactions; scoring (+1 on-time, −10 late) and reward distribution are computed purely from on-chain data.',
    tags: ['Solana', 'Anchor 0.30', 'Rust', 'DePIN', 'TypeScript'],
    repo: 'https://github.com/sivajisj/RouterPulse-Depin-Protocol',
    featured: true,
  },
  {
    title: 'Decentralized Voting Board',
    description:
      'On-chain voting platform where vote counts are read live from smart contracts — eliminating tampering. Admin dashboard + MetaMask wallet-gated voter flow, JWT auth in httpOnly cookies.',
    tags: ['Solidity', 'Next.js', 'TypeScript', 'MetaMask', 'MongoDB'],
    repo: 'https://github.com/sivajisj/voting-board',
    featured: true,
  },
  {
    title: 'Cross-Chain Token Bridge',
    description:
      'ERC-20 lock-and-mint bridge between Sepolia and Polygon Amoy. Deployed and verified on live testnets. Event-driven Node.js relayer listens for lock events and triggers mints.',
    tags: ['Solidity', 'ethers.js v6', 'Hardhat', 'Sepolia', 'Polygon Amoy'],
    repo: 'https://github.com/sivajisj/cross-chain-bridge',
    featured: true,
  },
  {
    title: 'DeFi Lending Protocol',
    description:
      'Permissionless over-collateralized lending: deposit, borrow, repay, interest accrual, and on-chain liquidation logic with price feed integration.',
    tags: ['Solidity', 'DeFi', 'Hardhat', 'OpenZeppelin v5'],
    repo: 'https://github.com/sivajisj/defi-lending-protocol-v2',
    featured: true,
  },
  {
    title: 'High-Performance Rust Transaction Service',
    description:
      'Async Rust microservice for multi-chain transaction queuing, status tracking, retry with backoff, and webhook notifications. Zero-cost abstractions via Axum + Tokio.',
    tags: ['Rust', 'Axum', 'Tokio', 'SQLx', 'PostgreSQL'],
    repo: 'https://github.com/sivajisj',
    featured: false,
  },
  {
    title: 'AI Smart Contract Security Agent',
    description:
      'Autonomous agent for Solidity vulnerability detection: reentrancy, overflow, access control flaws, unchecked external calls. Generates AI-driven audit reports.',
    tags: ['Rust', 'Python', 'Solidity AST', 'LLM APIs'],
    repo: 'https://github.com/sivajisj',
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
