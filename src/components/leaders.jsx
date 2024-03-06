import React, { Component } from 'react';
import { render } from 'react-dom';
import Leaderboard from '../../src/Leaderboard';

class Leads extends Component {
  constructor(props) {
  super(props);
  this.state = {
    users: [
      {
        "name": "0x795a97699a235d3e4721b163cb4f7b5468455b95",
        "score": 3137
      },
      {
        "name": "0x90660d44c9c39d3ce2575ff7d9ac9a3e9336663d",
        "score": 607
      },
      {
        "name": "0xfe3754c58f0191be717e40e94c8bd1dbe988c3bc",
        "score": 179
      },
      {
        "name": "0x91e7dbb1e86f2df9a9509a407363ba93aec01bf5",
        "score": 112
      },
      {
        "name": "0x08adb002d054f37a4576072878dede852f647cbb",
        "score": 40
      },
      {
        "name": "0x9d24ae944e8b4eb0906488d1442b21e27f6d19aa",
        "score": 25
      },
      {
        "name": "0x659fe17ee8738874a99b4106b9fef7aca2386bca",
        "score": 20
      },
      {
        "name": "0xa739adbc216168028dad114f7ff75a4fe862cded",
        "score": 19
      },
      {
        "name": "0xe712d8bd155aa3584500092215962043ebd21999",
        "score": 14
      },
      {
        "name": "0xb09ca3600bd41a716406becc6519247378fe6e36",
        "score": 11
      },
      {
        "name": "0x03ebec61344df4cc3f4a0b693a6e49d0d6ee0223",
        "score": 10
      },
      {
        "name": "0x806433a0657f49984df222d2b32b42e3e8a4d5a3",
        "score": 7
      },
      {
        "name": "0x4d98924df3e2d549caae2d09bac2546aa5dc9e97",
        "score": 7
      },
      {
        "name": "0x2432114ce00da798dbfc0933ae968b6612809524",
        "score": 6
      },
      {
        "name": "0x992021a472dc0a67b827d2801f3fde5f5bc66f15",
        "score": 6
      },
      {
        "name": "0xbf47da1bdbf46b4d23698476ceabbc6f4e27c36a",
        "score": 5
      },
      {
        "name": "0x838efc1775003517d798158206d80108ecd7d8f9",
        "score": 5
      },
      {
        "name": "0x52443a2c88dcdf1f433683c203049d1bd63a6ac5",
        "score": 4
      },
      {
        "name": "0x400d434b4a9768fb1c0c6ae0938f23356a5b1d80",
        "score": 4
      },
      {
        "name": "0x339b574c2e8a955739ea6eb9704f9c84d28e5fe3",
        "score": 4
      },
      {
        "name": "0x24a799cae776097c900d1cad4fb57344c6bcc763",
        "score": 3
      },
      {
        "name": "0x7df5e420e6aced287a475beff82f56a5a7876de7",
        "score": 3
      },
      {
        "name": "0xb1d761d23da6f2f11ccd8363b82217390de37a12",
        "score": 2
      },
      {
        "name": "0xa4f14695c510571822222968d7bbf323a38fce88",
        "score": 2
      },
      {
        "name": "0xa96d94831e290463f64ee5def04c7e142b5ac3c3",
        "score": 2
      },
      {
        "name": "0x85151a037f908bf92e6381fa61afd2db6107bd31",
        "score": 1
      },
      {
        "name": "0x13d8f23042fd1c875ccc4bb9dd8a49398f7ab6ab",
        "score": 1
      },
      {
        "name": "0x8f5e8082d5a389a308b0982f4c51579c18762ee4",
        "score": 1
      },
      {
        "name": "0xe25ae9b8226bd8a32ee8dc1dd5381df8ae3f4625",
        "score": 1
      },
      {
        "name": "0x57adf89c22a8dca53e8e37c35038dac780efab74",
        "score": 1
      },
      {
        "name": "0x7ce20bbea0e4cfb16c074f3b18cd0b8eabc4b4a3",
        "score": 1
      },
      {
        "name": "0xd0523addc89954d499fb2ce6d1cacb954d9a5892",
        "score": 1
      },
      {
        "name": "0x0000000000000000000000000000000000000009",
        "score": 0
      },
      {
        "name": "0x000000000000000000000000000000000000000a",
        "score": 0
      },
      {
        "name": "0xc65d86ec8d1a151c533881989ff56dda329949f7",
        "score": 0
      },
      {
        "name": "0x8d9aa7e78d05e32a8b5a659599c4bc7b48c83397",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000064",
        "score": 0
      },
      {
        "name": "0xb5d984e1feefdb4c68ab381291e6dcbbcbb48b9f",
        "score": 0
      },
      {
        "name": "0x4658c98d30f0ae431251c34212981d8e90ecfe6f",
        "score": 0
      },
      {
        "name": "0xc56a024a7cfb4b12845774de2553f72110fb5122",
        "score": 0
      },
      {
        "name": "0xe645da707fba306132f394631e4e154e307cf9c9",
        "score": 0
      },
      {
        "name": "0x8c3b5a0bd6fbec7c3b721a4d73b50f55ecf7baa0",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000128",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000002",
        "score": 0
      },
      {
        "name": "0x00000000000000000000000000000000000001b8",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000248",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000006",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000005",
        "score": 0
      },
      {
        "name": "0x0127e17107bfb41fb112c16f93731a2705a747c0",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000390",
        "score": 0
      },
      {
        "name": "0xdcebc2445e55c97ba93f9f6ec5bacd6a1385f886",
        "score": 0
      },
      {
        "name": "0x0bd539913b2fe4d6c77aba384433417c22465799",
        "score": 0
      },
      {
        "name": "0x00000000000000000000000000000000000026c6",
        "score": 0
      },
      {
        "name": "0xd72e1dee2a18846978fe39b1721e65e568196e95",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000214",
        "score": 0
      },
      {
        "name": "0x00000000000000000000000000000000000002a4",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000001",
        "score": 0
      },
      {
        "name": "0x00000000000000000000000000000000000000cc",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000098",
        "score": 0
      },
      {
        "name": "0x000000000000000000000000000000000000035c",
        "score": 0
      },
      {
        "name": "0x17247912bf7425a26644f6448eb6f40646159f96",
        "score": 0
      },
      {
        "name": "0x0ddfcb8fda52771c8ab62281d61a3164c165137b",
        "score": 0
      },
      {
        "name": "0x87f34204a8d4848231d5defe63e47b8531a93a9a",
        "score": 0
      },
      {
        "name": "0x415536840ddca452b6c68e3b86bd409376d1d7be",
        "score": 0
      },
      {
        "name": "0x000000000000000000000000000000000000000c",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000003",
        "score": 0
      },
      {
        "name": "0x21e4889055642555c6d4e0aff88cf061f57ca92e",
        "score": 0
      },
      {
        "name": "0x69d5dde5af1fa6cf5b86ec9b907c9ba1879c717f",
        "score": 0
      },
      {
        "name": "0xa77c8ec2f3883ed60a487b2a811c99726877ea61",
        "score": 0
      },
      {
        "name": "0xd64271606a20362a3c11d1c7c92897d6e4a5d45c",
        "score": 0
      },
      {
        "name": "0xa46e46af080cdd6b16284a862d87233bfe6ade4e",
        "score": 0
      },
      {
        "name": "0x2705d154198bc00412fc8bf1fb00cd1b3595bdb9",
        "score": 0
      },
      {
        "name": "0x00000000000000000000000000000000000003f8",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000008",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000004",
        "score": 0
      },
      {
        "name": "0x000000000000000000000000000000000000015c",
        "score": 0
      },
      {
        "name": "0x584be131aef5c619eb18296cfa46f94c7546ab7e",
        "score": 0
      },
      {
        "name": "0x000000000000000000000000000000000000000b",
        "score": 0
      },
      {
        "name": "0x000000000000000000000000000000000000000d",
        "score": 0
      },
      {
        "name": "0x1a4e3a3a36e01712e95a0e80b6cc8831622119b2",
        "score": 0
      },
      {
        "name": "0x8b7c1adcf0be9f53a309c7e19c288fa3ffdc7d47",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000007",
        "score": 0
      },
      {
        "name": "0xf2517aad148d673fe707bd46d4c19faab38b7e91",
        "score": 0
      },
      {
        "name": "0x166345a3fdc4f085d8b78e7bdec9dc13edefa793",
        "score": 0
      },
      {
        "name": "0x0000000000000000000000000000000000000300",
        "score": 0
      },
      {
        "name": "0x30c91fea381285859563dc11ec1a8dc17b503884",
        "score": 0
      },
      {
        "name": "0x7ab3009efbab4e8d39f5f56f27d20eb08ef9daca",
        "score": 0
      },
      {
        "name": "0x47fefe1a349b3b1f196fe4c6f3b5728ade5f72f1",
        "score": 0
      },
      {
        "name": "0xa964e761fba8abe467aa4dbd16334cfe4cdca6e6",
        "score": 0
      },
      {
        "name": "0xbdc76938179d264bc8bbbc4363292c958e0d5bc6",
        "score": 0
      },
      {
        "name": "0x00000000000000000000000000000000000003c4",
        "score": 0
      },
      {
        "name": "0xf5a32cc8cf450f599e730e6559501cc50cd38991",
        "score": 0
      },
      {
        "name": "0x26029644429570209fa103e75c20b3c96b24bae5",
        "score": 0
      }
    ],
    paginate: 10
  };
}
  render() {
    return (
      <div className="App">
        <Leaderboard users={this.state.users} paginate={this.state.paginate}/>
      </div>
    );
  }
}

export default Leads;