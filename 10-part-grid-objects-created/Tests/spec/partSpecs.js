describe("Part object", function () {

    var part = null;

    describe("part function called", function() {
        beforeEach(function() {
            part = receivingApp.part();

            // create some fake HTML
            $(document.body).append('<div id="currentParts"><a class="deletePartLink"></a></div>');
        });

        describe("Step 4 - delete link moved to object", function () {
            it("part should have a method to initialize the delete link", function() {
                expect(part.initializeDeleteLink).toBeDefined();
            });

            it("should handle a click on the #currentParts delete link", function() {
                // note - because of how .on binds to the parent controller, we have to detect the event there and
                // not on the link itself
                var $target = $('#currentParts');

                part.initializeDeleteLink();

                expect($target).toHandle("click");
            });
        });

        describe("Step 5 - move the remaining functionality to the object", function() {
            beforeEach(function() {
                // create some fake HTML
                $(document.body).append('<div id="createNewPart"></div>');
                $(document.body).append('<div id="toggleDiscontinuedParts"></div>');
            });

            afterEach(function() {
            });

            it("part should have a bunch more functions", function() {
                expect(part.initialize).toBeDefined();
                expect(part.initializeCreateNewLink).toBeDefined();
                expect(part.loadCurrentParts).toBeDefined();
                expect(part.initializeToggleDiscontinuedLink).toBeDefined();
                expect(part.loadCurrentParts).toBeDefined();
                expect(part.loadDiscontinuedParts).toBeDefined();
            })

            it("should handle a click on #createNewPart", function() {
                part.initializeCreateNewLink();

                expect($('#createNewPart')).toHandle('click');
            });

            it("should handle a click on #toggleDiscontinuedParts", function() {
                part.initializeToggleDiscontinuedLink();

                expect($('#toggleDiscontinuedParts')).toHandle('click');

            });

            it("should make an ajax call when loadCurrentParts called", function() {
                // return a fake object with a done function
                spyOn($, 'ajax').and.returnValue({
                    done: function() {}
                })

                part.loadCurrentParts();

                expect($.ajax).toHaveBeenCalled();
            });

            it("should make an ajax call when loadDiscontinuedParts called", function() {
                // return a fake object with a done function
                spyOn($, 'ajax').and.returnValue({
                    done: function() {}
                });

                part.loadDiscontinuedParts();

                expect($.ajax).toHaveBeenCalled();
            });
        });

        describe("Step 7 - make a createPartPopup function that inherits utility.createObjectPopup", function() {
            it("Add a createPartPopup function to receivingApp.part", function() {
                expect(receivingApp.part.createPartPopup).toBeDefined();
            });

            var popupObject = null;

            beforeEach(function() {
                popupObject = new receivingApp.part.createPartPopup();
            });

            it("Make createPartPopup's prototype be utility.createObjectPopup", function() {
                expect(receivingApp.utility.createObjectPopup.prototype.isPrototypeOf(popupObject)).toBeTruthy();
            });

            it("Give createPartPopup title and formId properties", function() {
                expect(popupObject.title).toBeDefined();
                expect(popupObject.formId).toBeDefined();
            });

            it("Give createPartPopup a createFunction that can be called from the prototype's code", function() {
                expect(popupObject.createFunction).toBeDefined();
            });

        });
    });
});