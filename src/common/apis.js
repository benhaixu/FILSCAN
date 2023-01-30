import baseApis from './base'

export default {
  loginApi: baseApis.baseUrl + "login",
  // user/getUserInfo
  getUserInfoApi:baseApis.baseUrl + "user/getUserInfo",
  //miner/list
  minerListApi: baseApis.baseUrl + "miner/list",
  // /miner/info
  minerInfoApi: baseApis.baseUrl + "miner/info",
  // rewardDetail/list
  rewardDetailListApi: baseApis.baseUrl + "rewardDetail/list",
  // /power/list
  powerListApi: baseApis.baseUrl + "power/list",
  // node-customer/list
  customerListApi: baseApis.baseUrl + "node-customer/list",
  // node-reward-config/list
  nodeRewardConfigApi: baseApis.baseUrl + "node-reward-config/list",
  // rewardDetail/export
  rewardDetailExportApi: baseApis.baseUrl + "rewardDetail/export",
  // node-reward-config/save
  nodeRewardConfigSaveApi: baseApis.baseUrl + "node-reward-config/save",
  // node-reward-config/delete
  nodeRewardConfigDeleteApi: baseApis.baseUrl + "node-reward-config/delete",
  // node-customer/list
  nodeCustomerListApi: baseApis.baseUrl + "node-customer/list",
  // node-reward-config/config/list
  nodeRewardConfigListApi: baseApis.baseUrl + "node-reward-config/config/list",
  // node-reward-config/update
  nodeRewardConfigUpdataApi: baseApis.baseUrl + "node-reward-config/update",
   /////////////////////////////二期
  // 节点管理 tr/miner/info/list
  minerInfoListApi: baseApis.baseUrl + "miner/info/list",
  // miner-wallet-address-relation/list
  minerWalletAddressApi: baseApis.baseUrl + "miner-wallet-address-relation/list",
  // miner-trade-log/list
  minerTradeApi: baseApis.baseUrl + "miner-trade-log/list",
  // miner-trade-log/update
  minerTradeLogApi: baseApis.baseUrl + "miner-trade-log/update",
  // miner-wallet-address-config/list
  minerWalletAddressConfigApi: baseApis.baseUrl + "miner-wallet-address-config/list",
  // miner-wallet-address-config/update
  minerWalletAddressUpdateApi: baseApis.baseUrl + "miner-wallet-address-config/update",
  // miner-wallet-address-config/add
  minerWalletAddressAddApi: baseApis.baseUrl + "miner-wallet-address-config/add",
  // miner-trade-type-config/list
  minertradeTypeApi: baseApis.baseUrl + "miner-trade-type-config/list",
  // /tr/miner-trade-type-config/add
  minertradeTypeAddApi: baseApis.baseUrl + "miner-trade-type-config/add",
  minertradeTypeUpdatedApi: baseApis.baseUrl + "miner-trade-type-config/update",
  // power/grow/list
  powerGrowListApi: baseApis.baseUrl + "power/grow/list",
  // power/export
  powerExportApi: baseApis.baseUrl + "power/export",
  // miner-contract-record/list
  minerContractListApi: baseApis.baseUrl + "miner-contract-record/list",
  // minerReward/locked/list
  minerRewardLockedApi: baseApis.baseUrl + "minerReward/locked/list",
  minerRewardMortgageApi: baseApis.baseUrl + "minerReward/mortgage/list",
  // minerReward/list
  minerRewardListApi: baseApis.baseUrl + "minerReward/list",
  // miner-contract-record/add
  minerContractAddApi: baseApis.baseUrl + "miner-contract-record/add",
  // miner-contract-record/update
  minerContractUpdateApi: baseApis.baseUrl + "miner-contract-record/update",
  // file-upload-record/upload
  fileUploadApi: baseApis.baseUrl + "file-upload-record/upload",
  // node-customer/saveOrUpdate
  nodeCustomersaveOrUpApi: baseApis.baseUrl + "node-customer/saveOrUpdate",
  // node-reward-config/config/delete
  noderewardconfigdeleteApi: baseApis.baseUrl + "node-reward-config/config/delete",
  // /tr/node-reward-config/byteConvert
  byteConvertApi: baseApis.baseUrl + "node-reward-config/byteConvert",
  // fil-miner-penalty-log/v1/list
  filMinerPenaltyLogListApi: baseApis.baseUrl + "fil-miner-penalty-log/v1/list",
  // fil-miner-penalty-log/v1/export
  filMinerPenaltyLogExportApi: baseApis.baseUrl + "fil-miner-penalty-log/v1/export",
  // minerTransaction/getMinerTransactionDetail
  minerTransactionGetMinerTransactionDetailApi: baseApis.baseUrl + "minerTransaction/getMinerTransactionDetail",
  // miner-trade-auto-match-rule/v1/list
  minerTradeAutoMatchRuleListApi: baseApis.baseUrl + "miner-trade-auto-match-rule/v1/list",
  // /tr/miner-trade-auto-match-rule/v1/add
  minerTradeAutoMatchRuleAddApi: baseApis.baseUrl + "miner-trade-auto-match-rule/v1/add",
  minerTradeAutoMatchRuleEditApi: baseApis.baseUrl + "miner-trade-auto-match-rule/v1/edit",
  //miner-trade-auto-match-rule/v1/address-name/list
  minerTradeAutoMatchRuleAddressNamelistApi: baseApis.baseUrl + "miner-trade-auto-match-rule/v1/address-name/list",
  // minerReward/export
  minerRewardExportApi: baseApis.baseUrl + "minerReward/export",
  // minerTransaction/addTransaction
  minerTransactionAddTransaction: baseApis.baseUrl + "minerTransaction/addTransaction",
  // minerTransaction/updateTransaction
  minerTransactionUpdateTransaction: baseApis.baseUrl + "minerTransaction/updateTransaction",
  // minerTransaction/deleteTransaction
  minerTransactionDeletTransaction: baseApis.baseUrl + "minerTransaction/deleteTransaction",
  // getTransactionDetailByDate
  getTransactionDetailByDateApi: baseApis.baseUrl + "minerTransaction/getTransactionDetailByDate",
  // miner-trade-auto-match-rule/v1/del
  minerTradeAutoMatchRuleDelApi: baseApis.baseUrl + "miner-trade-auto-match-rule/v1/del",
  // 全网算力
  // fil-sector-power-pledge-statistics/sector/list
  filSectorPowerSectorApi: baseApis.baseUrl + "fil-sector-power-pledge-statistics/sector/list",
  // fil-sector-power-pledge-statistics/pledge/list
  fileSectorPowerPledgeApi: baseApis.baseUrl + "fil-sector-power-pledge-statistics/pledge/list",
  // fil-sector-power-pledge-statistics/pledge/list
  fileSectorPowerExportApi: baseApis.baseUrl + "fil-sector-power-pledge-statistics/export",
  // dataCap/dataCap-pageList 1
  dataCaPageListApi: baseApis.baseUrl + "statistics/datacap-page-list",
  // dataCap/dataCap-list  1
  dataCapPicListApi: baseApis.baseUrl + "statistics/datacap-list",
  // dataCap/client-pageList 1
  dataCapClientPageListApi: baseApis.baseUrl + "statistics/datacap/client-page-list",
  // dataCap/miner-pageList 1
  dataCapMinerPageListApi: baseApis.baseUrl + "statistics/datacap/miner-page-list",
  // dataCap/client-minerList 1
  dataCapClientMinerListApi: baseApis.baseUrl + "statistics/datacap/client-miner-list",
  // dataCap/client-minerDetailList 1
  dataCapClientMinerDetailListApi: baseApis.baseUrl + "statistics/datacap/client-miner-detail-list",
  // dataCap/miner-clientList 1
  dataCapMinerClientListApi: baseApis.baseUrl + "statistics/datacap/miner-client-list",
  // dataCap/miner-clientDetailList 1
  dataCapMinerClientDetailListApi: baseApis.baseUrl + "statistics/datacap/miner-client-detail-list",
  // dataCap/dataCap-export
  dataCapDataCapExportApi: baseApis.baseUrl + "statistics/datacap-export",
  // api/collect-data-record/list
  collectDatalistApi: baseApis.baseUrl + "collect-data-record/list",
  // api/collect-data-record/off
  collectDataOffApi: baseApis.baseUrl + "collect-data-record/off",
  // api/collect-data-config/list
  ccollectDataConfigListApi: baseApis.baseUrl + "collect-data-config/list",
  // api/collect-data-record/add
  collectDataRecordAddApi: baseApis.baseUrl + "collect-data-record/add",
  // full-datacap-propose/notary-list 1
  fullDatacapProposeNotaryListApi: baseApis.baseUrl + "statistics/notary/notary-list",
  // full-datacap-propose/client-detail 1
  fullDatacapProposeClientListApi: baseApis.baseUrl + "statistics/notary/client-detail",
  // full-datacap-propose/notary-detail 1
  fullDatacapProposeNotaryDetailListApi: baseApis.baseUrl + "statistics/notary/notary-detail",
  userUpdateSkApi: baseApis.baseUrl + "user/update-sk",
  // 全网动态
  // tr/full-dynamic/list
  fullDynamicListApi: baseApis.baseUrl + "full-dynamic/list",
  // full-dynamic/export
  fullDynamicExportApi: baseApis.baseUrl + "full-dynamic/export",
  // full-dynamic/detail—list
  fullDynamicDetailListApi: baseApis.baseUrl + "full-dynamic/detail-list",
  // full-miner-dynamic/list
  fullMinerDynamicListApi: baseApis.baseUrl + "full-miner-dynamic/list",
  // full-miner-dynamic/export
  fullMinerDynamicExportApi: baseApis.baseUrl + "full-miner-dynamic/export",
  // miner-trade-log/export
  minerTradeLogExportApi: baseApis.baseUrl + "miner-trade-log/export",
  // minerReward/export-locked
  minerRewardExportLockedApi: baseApis.baseUrl + "minerReward/export-locked",
  // minerReward/export-mortgage
  minerRewardExportMortgageApi: baseApis.baseUrl + "minerReward/export-mortgage",
  // full-miner-dynamic/miner—list
  fullMinerDynamicMinerListApi: baseApis.baseUrl + "full-miner-dynamic/miner-list",
  // miner/export
  minerExportApi:baseApis.baseUrl + "miner/export",
};