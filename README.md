# postnet

标签： postnet

---

####__（1）将邮编转换成一个「条码」__:

####tasks:
#####1. 单元测试 + checkPostCode()
 &emsp; 输入值为 postCode,进行邮编长度、邮编数据类型的判断，若都符合要求
 &emsp;，返回为 code；
 &emsp; 估计完成时间：25分钟
 &emsp; 实际完成时间：32分钟
 &emsp; 超时原因：数据类型的来回转化，代码完成之后又进行了优化，测试代码中出
 &emsp; 现了低级错误导致测试刚开始通不过。
#####2. 单元测试 + getCode()
 &emsp; 输入值为 code, 计算code的校验码并与原code连接形成新的code返回；
 &emsp; 估计完成时间：15分钟
 &emsp; 实际完成时间：13分钟
 &emsp; 时间缩短原因：reduce()方法对数组中的每一项求和缩短了写代码时间
#####3. 单元测试 + buildBarcode()
 &emsp; 输入值为 code，allItems,对code中的每一个数字在allItems中找到匹配
 &emsp; 的项目并连接，返回值为最终条码barcode。
 &emsp; 估计完成时间：30分钟
 &emsp; 实际完成时间：45分钟
 &emsp; 超时原因：传入参数的类型没有转换导致用方法时找不到，最终进行输出
 &emsp;调试解决。


----------


####__（2）将「条码」转换成一个邮编__ : 
####tasks：
#####1. 单元测试 + checkBarcode()
 &emsp; 输入值为 barcode,进行数据类型的合理判断，若符合要求，返回barcodes；
 &emsp; 估计完成时间：25分钟
 &emsp; 实际完成时间：21分钟
 &emsp; 时间缩短原因：filder()函数的过滤筛选作用对检测输入的barcode是否
 &emsp; 只含有“|”以及“：”很有帮助。
#####2. 单元测试 + transformCode()
 &emsp; 输入值为 barcode , allItems ， 将输入值去掉边界并以5为步长进行
 &emsp; 分割，在allItems中找到对应的数字编码，最后将所有匹配好的数字连
 &emsp; 接并返回postCodes；
 &emsp; 估计完成时间：40分钟
 &emsp; 实际完成时间：55分钟
 &emsp; 超时原因：分割barcode时遇到瓶颈查了好久找到了合适的slice()方法。
#####3. 单元测试 + checkPostCode()
 &emsp; 输入值为 postCodes ,检验校验码是否与邮编对应 。
 &emsp; 估计完成时间：20分钟
 &emsp; 实际完成时间：15分钟
 &emsp; 时间缩短原因：slice()方法，与reduce()方法的使用
#####4. 单元测试 + getPostCode()
 &emsp; 输入值为 postcodes , 判断postcodes的长度决定是否需要加横杠，返回
 &emsp; postcode。
 &emsp; 估计完成时间：10分钟
 &emsp; 实际完成时间：9分钟
 &emsp; 时间缩短原因：slice()方法与concat()方法的使用。
