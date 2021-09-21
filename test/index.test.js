require('dotenv').config();
const chai = require('chai');
const expect = chai.expect;
const krdict = require('./../src/index');

krdict.setKey(process.env.KRDICT_KEY);

function getNthItem(responseData, n) {
    return responseData.channel.item[n];
}

describe('When searching via the krdict API using the "dictionarySearch" function', function () {
    it('Should return results when passing in basic parameters', async function () {
        const response = await krdict.dictionarySearch({
            query: '나무'
        });
        const responseData = response.data;
        expect(responseData.channel).to.not.be.null;
        expect(getNthItem(responseData, 0).word).to.eql('나무');
        expect(getNthItem(responseData, 1).word).to.eql('나무라다');
        expect(getNthItem(responseData, 2).word).to.eql('나무꾼');
        expect(getNthItem(responseData, 3).word).to.eql('나무람');
        expect(getNthItem(responseData, 4).word).to.eql('나무배');
        expect(getNthItem(responseData, 5).word).to.eql('나무뿌리');
        expect(getNthItem(responseData, 6).word).to.eql('나무숲');
        expect(getNthItem(responseData, 7).word).to.eql('나무아미타불');
        expect(getNthItem(responseData, 8).word).to.eql('나무아미타불');
        expect(getNthItem(responseData, 9).word).to.eql('나무저');
        expect(responseData.channel.num).to.eql(10);
        expect(responseData.channel.start).to.eql(1);
        expect(responseData.channel.total).to.eql(53);
    });

    it('Should start at correct index when passing in "searchStartIndex" parameter', async function () {
        const response = await krdict.dictionarySearch({
            query: '나무',
            searchStartIndex: 5
        });
        const responseData = response.data;
        expect(responseData.channel).to.not.be.null;
        expect(responseData.channel.start).to.eql(5);
    });

    it('Should return correct number of results when passing in "numberOfResults" parameter', async function () {
        const response = await krdict.dictionarySearch({
            query: '나무',
            numberOfResults: 15
        });
        const responseData = response.data;
        expect(responseData.channel.item).to.be.an('array').of.length(15);
        expect(responseData.channel.num).to.eql(15);
    });

    it('Should return correctly sorted data when passing in "sortMethod" parameter', async function () {
        const response = await krdict.dictionarySearch({
            query: '나무',
            sortMethod: "popular"
        });
        const responseData = response.data;
        expect(getNthItem(responseData, 0).word).to.eql('나무');
        expect(getNthItem(responseData, 1).word).to.eql('나무라다');
        expect(getNthItem(responseData, 2).word).to.eql('나무하다');
        expect(getNthItem(responseData, 3).word).to.eql('나무아미타불');
    });

    it('Should search in correct target when passing in "searchTarget" parameter', async function () {
        const response = await krdict.dictionarySearch({
            query: '나무',
            searchTarget: 'example'
        });
        const responseData = response.data;
        responseData.channel.item.forEach((item) => {
            expect(item.example).to.be.a('string');
            expect(item.example).to.contain('나무');
        });
    });

    it.skip('Should search in detail when using the "detailedSearch" parameter', async function () {
        // Skipped because flaky test, sometimes passes sometimes fails
        const response = await krdict.dictionarySearch({
            query: '나무',
            detailedSearch: true,
        });
        const responseData = response.data;
        expect(responseData.channel.item).to.be.an('array').of.length(1);
        expect(getNthItem(responseData, 0).meaning).to.be.an('array').of.length(3);
        expect(getNthItem(responseData, 0).meaning[0].definition).to.eql('단단한 줄기에 가지와 잎이 달린, 여러 해 동안 자라는 식물.');
        expect(getNthItem(responseData, 0).meaning[1].definition).to.eql('집이나 가구 등을 만드는 데 사용하는 재목.');
        expect(getNthItem(responseData, 0).meaning[2].definition).to.eql('불을 때기 위해 베어 놓은 나무의 줄기나 가지.');
    });
});

describe('When retrieving data via the krdict API using the "dictionaryView" function', function () {
    it('Should return results when searching with word_info view method', async function() {
        const response = await krdict.dictionaryView({
            query: '나무',
            viewMethod: 'word_info'
        });
        const responseData = response.data;
        expect(responseData.channel).to.not.be.null;
        const item = getNthItem(responseData, 0);
        expect(item.targetCode).to.eql(32750);
        expect(item.wordInfo.word).to.eql('나무');
        expect(responseData.channel.total).to.eql(1);
    });

    it('Should return results when searching with target_code view method', async function () {
        const response = await krdict.dictionaryView({
            targetCode: 32750,
            viewMethod: 'target_code'
        });
        const responseData = response.data;
        expect(responseData.channel).to.not.be.null;
        const item = getNthItem(responseData, 0);
        expect(item.targetCode).to.eql(32750);
        expect(item.wordInfo.word).to.eql('나무');
        expect(responseData.channel.total).to.eql(1);
    });
});
