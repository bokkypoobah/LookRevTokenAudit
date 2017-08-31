var tokenOutput={"contracts":{"LookRevCrowdSaleToken.sol:ERC20":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":""},"LookRevCrowdSaleToken.sol:LookRevToken":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TOKENS_TOTAL\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tokensPerKEther\",\"type\":\"uint256\"}],\"name\":\"setTokensPerKEther\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"participant\",\"type\":\"address\"},{\"name\":\"_required\",\"type\":\"bool\"}],\"name\":\"kycVerify\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"finalised\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"BONUSTWO_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"KYC_THRESHOLD\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"CONTRIBUTIONS_MIN\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"INITIAL_SUPPLY\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"START_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"participant\",\"type\":\"address\"},{\"name\":\"balance\",\"type\":\"uint256\"}],\"name\":\"addPrecommitment\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TOKENS_SOFT_CAP\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"BONUSONE_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"wallet\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"END_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"burnFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TOKENS_HARD_CAP\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"DECIMALSFACTOR\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"CONTRIBUTIONS_MAX\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalise\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"tokensPerKEther\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"kycRequired\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenAddress\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferAnyERC20Token\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_wallet\",\"type\":\"address\"}],\"name\":\"setWallet\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"participant\",\"type\":\"address\"}],\"name\":\"proxyPayment\",\"outputs\":[],\"payable\":true,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"VERSION\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"type\":\"constructor\"},{\"payable\":true,\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"newWallet\",\"type\":\"address\"}],\"name\":\"WalletUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"tokensPerKEther\",\"type\":\"uint256\"}],\"name\":\"TokensPerKEtherUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"ethers\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"participantTokenBalance\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"newTotalSupply\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"tokensPerKEther\",\"type\":\"uint256\"}],\"name\":\"TokensBought\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"participant\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"balance\",\"type\":\"uint256\"}],\"name\":\"PrecommitmentAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"participant\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"required\",\"type\":\"bool\"}],\"name\":\"KycVerified\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":"606060405260408051908101604052600681527f4c4f4b312e300000000000000000000000000000000000000000000000000000602082015260059080516200004d92916020019062000100565b5060068054600160a860020a031916905562249f0060085560006009819055600a5534156200007b57600080fd5b5b5b60018054600160a060020a03191633600160a060020a03161790555b60018054600160a060020a03191633600160a060020a0390811691909117918290556006805461010060a860020a031916610100939092169283029190911790556a084595161401484a000000600081815591825260036020526040909120555b620001aa565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200014357805160ff191683800117855562000173565b8280016001018555821562000173579182015b828111156200017357825182559160200191906001019062000156565b5b506200018292915062000186565b5090565b620001a791905b808211156200018257600081556001016200018d565b5090565b90565b61189d80620001ba6000396000f300606060405236156101d55763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146101e7578063095ea7b3146102725780630b743021146102a85780630e9d02cc146102cd57806318160ddd146102e55780631e9dd9271461030a578063214bb60f1461033057806323b872dd146103575780632957ca33146103935780632d133eee146103b85780632da13d5e146103dd5780632ff2e9dc14610402578063313ce56714610427578063372c6533146104505780633818d907146104755780633a9f967e1461040257806351ab351c146104be578063521eb273146104e3578063545599ff1461051257806370a082311461053757806379ba50971461056857806379cc67901461057d578063831a1754146105b35780638bc04eb7146105d85780638da5cb5b146105fd57806393fea1841461062c57806395d89b4114610651578063a4399263146106dc578063a5bc770c146106f1578063a9059cbb14610716578063b7121da41461074c578063d4ee1d901461077f578063dc39d06d146107ae578063dd62ed3e146107e4578063deaa59df1461081b578063f2fde38b1461083c578063f48c30541461085d578063ffa1ad7414610873575b6101e55b6101e2336108fe565b5b565b005b34156101f257600080fd5b6101fa610b31565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156102375780820151818401525b60200161021e565b50505050905090810190601f1680156102645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561027d57600080fd5b610294600160a060020a0360043516602435610b68565b604051901515815260200160405180910390f35b34156102b357600080fd5b6102bb610c3d565b60405190815260200160405180910390f35b34156102d857600080fd5b6101e5600435610c4d565b005b34156102f057600080fd5b6102bb610cc2565b60405190815260200160405180910390f35b341561031557600080fd5b6101e5600160a060020a03600435166024351515610cc8565b005b341561033b57600080fd5b610294610d4a565b604051901515815260200160405180910390f35b341561036257600080fd5b610294600160a060020a0360043581169060243516604435610d53565b604051901515815260200160405180910390f35b341561039e57600080fd5b6102bb610da2565b60405190815260200160405180910390f35b34156103c357600080fd5b6102bb610daa565b60405190815260200160405180910390f35b34156103e857600080fd5b6102bb610db7565b60405190815260200160405180910390f35b341561040d57600080fd5b6102bb610dbd565b60405190815260200160405180910390f35b341561043257600080fd5b61043a610dcc565b60405160ff909116815260200160405180910390f35b341561045b57600080fd5b6102bb610dd1565b60405190815260200160405180910390f35b341561048057600080fd5b6101e5600160a060020a0360043516602435610dd9565b005b341561040d57600080fd5b6102bb610dbd565b60405190815260200160405180910390f35b34156104c957600080fd5b6102bb610ede565b60405190815260200160405180910390f35b34156104ee57600080fd5b6104f6610ee6565b604051600160a060020a03909116815260200160405180910390f35b341561051d57600080fd5b6102bb610efa565b60405190815260200160405180910390f35b341561054257600080fd5b6102bb600160a060020a0360043516610f02565b60405190815260200160405180910390f35b341561057357600080fd5b6101e5610f21565b005b341561058857600080fd5b610294600160a060020a0360043516602435610fad565b604051901515815260200160405180910390f35b34156105be57600080fd5b6102bb611189565b60405190815260200160405180910390f35b34156105e357600080fd5b6102bb611199565b60405190815260200160405180910390f35b341561060857600080fd5b6104f66111a5565b604051600160a060020a03909116815260200160405180910390f35b341561063757600080fd5b6102bb6111b4565b60405190815260200160405180910390f35b341561065c57600080fd5b6101fa6111ba565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156102375780820151818401525b60200161021e565b50505050905090810190601f1680156102645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156106e757600080fd5b6101e56111f1565b005b34156106fc57600080fd5b6102bb611258565b60405190815260200160405180910390f35b341561072157600080fd5b610294600160a060020a036004351660243561125e565b604051901515815260200160405180910390f35b341561075757600080fd5b610294600160a060020a03600435166112c4565b604051901515815260200160405180910390f35b341561078a57600080fd5b6104f66112d9565b604051600160a060020a03909116815260200160405180910390f35b34156107b957600080fd5b610294600160a060020a03600435166024356112e8565b604051901515815260200160405180910390f35b34156107ef57600080fd5b6102bb600160a060020a03600435811690602435166113a6565b60405190815260200160405180910390f35b341561082657600080fd5b6101e5600160a060020a03600435166113d3565b005b341561084757600080fd5b6101e5600160a060020a0360043516611466565b005b6101e5600160a060020a03600435166108fe565b005b341561087e57600080fd5b6101fa6114be565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156102375780820151818401525b60200161021e565b50505050905090810190601f1680156102645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60065460009060ff161561091157600080fd5b6359a83e5442111561092257600080fd5b600954341161093057600080fd5b600a5415806109405750600a5434105b151561094b57600080fd5b6359a83d824210156109635762249f0060085561099b565b6359a83ddc42101561097b57622dc6c060085561099b565b6359a83e1842101561099357622932e060085561099b565b62249f006008555b5b5b6008546103e89034025b60005491900491506b06765c793fa10079d000000090820111156109ca57600080fd5b600160a060020a0382166000908152600360205260409020546109ed908261155c565b600160a060020a03831660009081526003602052604081209190915554610a14908261155c565b6000908155600160a060020a038316906000805160206118528339815191528360405190815260200160405180910390a3600160a060020a0382166000818152600360205260408082205491546008547f6a7381bdc8f4e7ed3c0f0c299382777bde88a65f0c27f670235401d15445463093349390928792909151808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a268056bc75e2d63100000341115610af257600160a060020a0382166000908152600760205260409020805460ff191660011790555b600654600160a060020a03610100909104163480156108fc0290604051600060405180830381858888f193505050501515610b2c57600080fd5b5b5050565b60408051908101604052600781527f4c6f6f6b52657600000000000000000000000000000000000000000000000000602082015281565b60008115801590610b9d5750600160a060020a0333811660009081526004602090815260408083209387168352929052205415155b15610baa57506000610c37565b600160a060020a03331660009081526003602052604090205482901015610bd357506000610c37565b600160a060020a03338116600081815260046020908152604080832094881680845294909152908190208590557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b6b1027e72f1f1281308800000081565b60015433600160a060020a03908116911614610c6857600080fd5b6359a83d824210610c7857600080fd5b60008111610c8557600080fd5b60088190557fee386bebbe46d39825c2b93313aa1ab1dc57d4774cac81c6debb8c611c9227ab8160405190815260200160405180910390a15b5b50565b60005481565b60015433600160a060020a03908116911614610ce357600080fd5b600160a060020a03821660008181526007602052604090819020805460ff191684151517908190557f56630bce62637c61f75690e6d06fae1782bcb5208fa536eff58b0ff669d0d5dc9160ff9091169051901515815260200160405180910390a25b5b5050565b60065460ff1681565b60065460009060ff161515610d6757600080fd5b600160a060020a03841660009081526007602052604090205460ff1615610d8d57600080fd5b610d98848484611584565b90505b9392505050565b6359a83e1881565b68056bc75e2d6310000081565b60095481565b6a084595161401484a00000081565b601281565b6359a83d8281565b60015433600160a060020a03908116911614610df457600080fd5b6359a83d824210610e0457600080fd5b60008111610e1157600080fd5b600160a060020a038216600090815260036020526040902054610e34908261155c565b600160a060020a03831660009081526003602052604081209190915554610e5b908261155c565b6000908155600160a060020a038316906000805160206118528339815191528360405190815260200160405180910390a381600160a060020a03167f7491ef60ef15234f7870c9adc8fb11274a09d6f0d092d2a280e8b75a0c42e12f8260405190815260200160405180910390a25b5b5050565b6a084595161401484a00000081565b6359a83ddc81565b6006546101009004600160a060020a031681565b6359a83e5481565b600160a060020a0381166000908152600360205260409020545b919050565b60025433600160a060020a03908116911614610f3c57600080fd5b600254600154600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36002546001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b565b6000805482901015610fbe57600080fd5b600160a060020a03831660009081526003602052604090205482901080159061100b5750600160a060020a0383166000908152600460209081526040808320838052909152902054829010155b80156110175750600082115b801561104e57506000805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff54828101115b1561117a57600160a060020a0383166000908152600360205260409020546110769083611718565b600160a060020a03841660009081526003602052604081209190915580527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff546110c0908361155c565b7f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff55600160a060020a03831660009081526004602090815260408083208380529091529020546111109083611718565b600160a060020a0384166000908152600460209081526040808320838052909152812091909155546111429083611718565b6000908155600160a060020a0384166000805160206118528339815191528460405190815260200160405180910390a3506001610c37565b506000610c37565b5b92915050565b6b06765c793fa10079d000000081565b670de0b6b3a764000081565b600154600160a060020a031681565b600a5481565b60408051908101604052600381527f4c4f4b0000000000000000000000000000000000000000000000000000000000602082015281565b60015433600160a060020a0390811691161461120c57600080fd5b6000546a084595161401484a0000009010158061122c57506359a83e5442115b151561123757600080fd5b60065460ff161561124757600080fd5b6006805460ff191660011790555b5b565b60085481565b60065460009060ff1680611280575060015433600160a060020a039081169116145b151561128b57600080fd5b600160a060020a03331660009081526007602052604090205460ff16156112b157600080fd5b6112bb838361173e565b90505b92915050565b60076020526000908152604090205460ff1681565b600254600160a060020a031681565b60015460009033600160a060020a0390811691161461130657600080fd5b600154600160a060020a038085169163a9059cbb9116846000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561138257600080fd5b6102c65a03f1151561139357600080fd5b50505060405180519150505b5b92915050565b600160a060020a038083166000908152600460209081526040808320938516835292905220545b92915050565b60015433600160a060020a039081169116146113ee57600080fd5b6006805474ffffffffffffffffffffffffffffffffffffffff001916610100600160a060020a03848116820292909217928390557f4edbfac5b40fe46ac1af1fd222b224b38cfeeb9e21bd4fc6344526c245f7549b920416604051600160a060020a03909116815260200160405180910390a15b5b50565b60015433600160a060020a0390811691161461148157600080fd5b600160a060020a03811615610cbe576002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b50565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115545780601f1061152957610100808354040283529160200191611554565b820191906000526020600020905b81548152906001019060200180831161153757829003601f168201915b505050505081565b60008282018381108015906115715750828110155b151561157957fe5b8091505b5092915050565b600081151561159557506001610d9b565b600160a060020a0384166000908152600360205260409020548290108015906115e55750600160a060020a0380851660009081526004602090815260408083203390941683529290522054829010155b80156115f15750600082115b80156116165750600160a060020a038316600090815260036020526040902054828101115b1561170857600160a060020a03841660009081526003602052604090205461163e9083611718565b600160a060020a038086166000908152600360209081526040808320949094556004815283822033909316825291909152205461167b9083611718565b600160a060020a03808616600090815260046020908152604080832033851684528252808320949094559186168152600390915220546116bb908361155c565b600160a060020a03808516600081815260036020526040908190209390935591908616906000805160206118528339815191529085905190815260200160405180910390a3506001610d9b565b506000610d9b565b5b9392505050565b6000808383111561172557fe5b508183038381111561157957fe5b8091505b5092915050565b600081151561174f57506001610c37565b600160a060020a0333166000908152600360205260409020548290108015906117785750600082115b801561179d5750600160a060020a038316600090815260036020526040902054828101115b1561117a57600160a060020a0333166000908152600360205260409020546117c59083611718565b600160a060020a0333811660009081526003602052604080822093909355908516815220546117f4908361155c565b600160a060020a0380851660008181526003602052604090819020939093559133909116906000805160206118528339815191529085905190815260200160405180910390a3506001610c37565b506000610c37565b5b929150505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a7230582039abe6493d2cf3532d203940adebe8fad1979f31a9b83c4accc0d1cdb70bdc8e0029"},"LookRevCrowdSaleToken.sol:Ownable":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]","bin":"6060604052341561000f57600080fd5b5b60008054600160a060020a03191633600160a060020a03161790555b5b6102208061003c6000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba5097811461005e5780638da5cb5b14610073578063d4ee1d90146100a2578063f2fde38b146100d1575b600080fd5b341561006957600080fd5b6100716100f2565b005b341561007e57600080fd5b61008661017e565b604051600160a060020a03909116815260200160405180910390f35b34156100ad57600080fd5b61008661018d565b604051600160a060020a03909116815260200160405180910390f35b34156100dc57600080fd5b610071600160a060020a036004351661019c565b005b60015433600160a060020a0390811691161461010d57600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a039081169116146101b757600080fd5b600160a060020a038116156101ef576001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b505600a165627a7a723058206552376aad9934733f02cd71c25242e4fefc6248ff0cba100dfdb503e7f28bbf0029"},"LookRevCrowdSaleToken.sol:SafeMath":{"abi":"[]","bin":"60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a7230582039dea6c445a6623f89545b111c78c232b7edccf375502bda92dc40d0ff7e3c5d0029"},"LookRevCrowdSaleToken.sol:StandardToken":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":"60606040525b60018054600160a060020a03191633600160a060020a03161790555b5b6107d9806100316000396000f300606060405236156100a15763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b381146100a657806318160ddd146100dc57806323b872dd1461010157806370a082311461013d57806379ba50971461016e5780638da5cb5b14610183578063a9059cbb146101b2578063d4ee1d90146101e8578063dd62ed3e14610217578063f2fde38b1461024e575b600080fd5b34156100b157600080fd5b6100c8600160a060020a036004351660243561026f565b604051901515815260200160405180910390f35b34156100e757600080fd5b6100ef610344565b60405190815260200160405180910390f35b341561010c57600080fd5b6100c8600160a060020a036004358116906024351660443561034a565b604051901515815260200160405180910390f35b341561014857600080fd5b6100ef600160a060020a03600435166104ec565b60405190815260200160405180910390f35b341561017957600080fd5b61018161050b565b005b341561018e57600080fd5b610196610597565b604051600160a060020a03909116815260200160405180910390f35b34156101bd57600080fd5b6100c8600160a060020a03600435166024356105a6565b604051901515815260200160405180910390f35b34156101f357600080fd5b6101966106cb565b604051600160a060020a03909116815260200160405180910390f35b341561022257600080fd5b6100ef600160a060020a03600435811690602435166106da565b60405190815260200160405180910390f35b341561025957600080fd5b610181600160a060020a0360043516610707565b005b600081158015906102a45750600160a060020a0333811660009081526004602090815260408083209387168352929052205415155b156102b15750600061033e565b600160a060020a033316600090815260036020526040902054829010156102da5750600061033e565b600160a060020a03338116600081815260046020908152604080832094881680845294909152908190208590557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b60005481565b600081151561035b575060016104e4565b600160a060020a0384166000908152600360205260409020548290108015906103ab5750600160a060020a0380851660009081526004602090815260408083203390941683529290522054829010155b80156103b75750600082115b80156103dc5750600160a060020a038316600090815260036020526040902054828101115b156104e057600160a060020a038416600090815260036020526040902054610404908361075f565b600160a060020a0380861660009081526003602090815260408083209490945560048152838220339093168252919091522054610441908361075f565b600160a060020a03808616600090815260046020908152604080832033851684528252808320949094559186168152600390915220546104819083610785565b600160a060020a03808516600081815260036020526040908190209390935591908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060016104e4565b5060005b5b9392505050565b600160a060020a0381166000908152600360205260409020545b919050565b60025433600160a060020a0390811691161461052657600080fd5b600254600154600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36002546001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b565b600154600160a060020a031681565b60008115156105b75750600161033e565b600160a060020a0333166000908152600360205260409020548290108015906105e05750600082115b80156106055750600160a060020a038316600090815260036020526040902054828101115b156106bc57600160a060020a03331660009081526003602052604090205461062d908361075f565b600160a060020a03338116600090815260036020526040808220939093559085168152205461065c9083610785565b600160a060020a0380851660008181526003602052604090819020939093559133909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600161033e565b50600061033e565b5b92915050565b600254600160a060020a031681565b600160a060020a038083166000908152600460209081526040808320938516835292905220545b92915050565b60015433600160a060020a0390811691161461072257600080fd5b600160a060020a0381161561075a576002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b50565b6000808383111561076c57fe5b508183038381111561077a57fe5b8091505b5092915050565b600082820183811080159061079a5750828110155b151561077a57fe5b8091505b50929150505600a165627a7a72305820c2163d0907aaadbc17040030428be64bd40105d52e35480d7f67c936a9e6de750029"}},"version":"0.4.13+commit.0fb4cb1a.Darwin.appleclang"};
