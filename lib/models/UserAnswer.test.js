const UserAnswer = require('./UserAnswers');

describe('User Answers model', () => {

    it('should be given an name', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.name.message).toEqual('Path `name` is required.');
    });

    it('should be given pronoun', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.pronoun.message).toEqual('Path `pronoun` is required.');
    });

    it('should be given correct enum for pronouns', () => {
        const userAnswer = new UserAnswer({
            pronoun: 'hi'
        });
        const { errors } = userAnswer.validateSync();
    
        expect(errors.pronoun.message).toEqual('`hi` is not a valid enum value for path `pronoun`.');
    });


  
    it('should be given email', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.email.message).toEqual('Path `email` is required.');
    });
  


    it('should be given an phone', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.phone.message).toEqual('Path `phone` is required.');
    });

    it('should be given address', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.address.message).toEqual('Path `address` is required.');
    });

    it('should be given companyName', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.companyName.message).toEqual('Path `companyName` is required.');
    });


    it('should be given an companyAddress', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.companyAddress.message).toEqual('Path `companyAddress` is required.');
    });

    it('should be given hiringManager', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.hiringManager.message).toEqual('Path `hiringManager` is required.');
    });


    it('should be given an companyMission', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.companyMission.message).toEqual('Path `companyMission` is required.');
    });

    it('should be given jobKeyword1', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.jobKeyword1.message).toEqual('Path `jobKeyword1` is required.');
    });

    it('should be given jobKeyword2', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.jobKeyword2.message).toEqual('Path `jobKeyword2` is required.');
    });


    it('should be given an jobKeyword3', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.jobKeyword3.message).toEqual('Path `jobKeyword3` is required.');
    });

    it('should be given passion1', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.passion1.message).toEqual('Path `passion1` is required.');
    });

    it('should be given passion2', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.passion2.message).toEqual('Path `passion2` is required.');
    });


    it('should be given an passion3', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.passion3.message).toEqual('Path `passion3` is required.');
    });


    it('should be given an positionTitle', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.positionTitle.message).toEqual('Path `positionTitle` is required.');
    });


    it('should be given value1', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.value1.message).toEqual('Path `value1` is required.');
    });

    it('should be given value2', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.value2.message).toEqual('Path `value2` is required.');
    });


    it('should be given an value3', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.value3.message).toEqual('Path `value3` is required.');
    });


    it('should be given a companyCustomer', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.companyCustomer.message).toEqual('Path `companyCustomer` is required.');
    });

    it('should be given whyCustomerMatters', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.whyCustomerMatters.message).toEqual('Path `whyCustomerMatters` is required.');
    });


    it('should be given an companyMotivatesMeTo', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.companyMotivatesMeTo.message).toEqual('Path `companyMotivatesMeTo` is required.');
    });



    it('should be given a opportunitiesTheEmployerProvides1', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.opportunitiesTheEmployerProvides1.message).toEqual('Path `opportunitiesTheEmployerProvides1` is required.');
    });

    it('should be given opportunitiesTheEmployerProvides2', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.opportunitiesTheEmployerProvides2.message).toEqual('Path `opportunitiesTheEmployerProvides2` is required.');
    });


    it('should be given an techLanguage1', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.techLanguage1.message).toEqual('Path `techLanguage1` is required.');
    });



    it('should be given an techLanguage2', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.techLanguage2.message).toEqual('Path `techLanguage2` is required.');
    });


    it('should be given an techLanguage3', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.techLanguage3.message).toEqual('Path `techLanguage3` is required.');
    });


    it('should be given an techLanguage4', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.techLanguage4.message).toEqual('Path `techLanguage4` is required.');
    });


    it('should be given an pastExperience', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.pastExperience.message).toEqual('Path `pastExperience` is required.');
    });


    it('should be given an skillJobDescription1', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.skillJobDescription1.message).toEqual('Path `skillJobDescription1` is required.');
    });



    it('should be given an skillJobDescription2', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.skillJobDescription2.message).toEqual('Path `skillJobDescription2` is required.');
    });


    it('should be given an skillJobDescription3', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.skillJobDescription3.message).toEqual('Path `skillJobDescription3` is required.');
    });


    it('should be given an mainResponsibilityAtOldJob', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.mainResponsibilityAtOldJob.message).toEqual('Path `mainResponsibilityAtOldJob` is required.');
    });



    it('should be given an pastAccomplishment1', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.pastAccomplishment1.message).toEqual('Path `pastAccomplishment1` is required.');
    });


    it('should be given an pastAccomplishment2', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.pastAccomplishment2.message).toEqual('Path `pastAccomplishment2` is required.');
    });
  

    it('should be given an excitedToDo', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.excitedToDo.message).toEqual('Path `excitedToDo` is required.');
    });

    it('should be given an sincerely', () => {
        const userAnswer = new UserAnswer();
        const { errors } = userAnswer.validateSync();
        expect(errors.sincerely.message).toEqual('Path `sincerely` is required.');
    });

    it('should be given correct enum for sincerely', () => {
        const userAnswer = new UserAnswer({
            sincerely: 'BYEEEE'
        });
        const { errors } = userAnswer.validateSync();
    
        expect(errors.sincerely.message).toEqual('`BYEEEE` is not a valid enum value for path `sincerely`.');
    });



  
});
