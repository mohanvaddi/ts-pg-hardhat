import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  defaultNetwork: 'local',
  networks: {
    // ganache url
    local: {
      url: 'http://127.0.0.1:7545',
      chainId: 5777,
      accounts: [
        '0xaeddb5055137d9ea47a7e860ed728872960c2d19b99ab3cbe0b8e2c6d6957fb4',
      ],
    },
  },
};

export default config;
