export const ADDR_VERSION = '41'

export const DEFAULT_SCRYPT = {
    cost: 16384,
    blockSize: 8,
    parallel: 8,
    size: 64
  }

  // specified by oep, same as bip38
export const OEP_HEADER = '0142'

export const OEP_FLAG = 'e0'


// Ont://nativeMethod?param1=xxx&param2=yyy
export const WEBVIEW_SCHEME = 'Ont'

export class Algorithm {
  algorithm: string
  parameters: {}
}

export const DEFAULT_ALGORITHM = {
  algorithm : "ECDSA",
  parameters : {
    "curve": "secp256r1"
  }
}

export const Test_node = '52.80.115.91'
// export const Test_node = '192.168.3.128'
export const Test_websocket_port = '20335'
export const Test_http_port = '20336'

export const tx_url = `http://${Test_node}:${Test_http_port}/`
export const socket_url = `ws://${Test_node}:${Test_websocket_port}`
