var ActivitiJs = {

    /**
     * Expects a configuration json object that looks like
     *
     * var config = {
     *   target:"myDiv" | targetSelector="#someId",
     *   formId:"123"
     * };
     *
     * The form will then be rendered in the element found by
     * the target selector.
     *
     */
    renderForm: function (config) {

        $.ajax({
            url: '/rest/app/rest/task-forms/' + config.taskId,
            type: 'GET',
            success: function (data) {

                var activitiForm = data;

                if (data.fields && data.fields.length > 0) {

                    // Get the target DOM element
                    var targetElement;
                    if (config.target) {
                        targetElement = config.target;
                    } else if (config.targetSelector) {
                        targetElement = $(config.targetSelector);
                    } else {
                        console.log('Invalid usage: target or targetSelector should be provided');
                    }

                    // Remove all existing element
                    targetElement.empty();

                    // Add form fields
                    for (var i=0; i<data.fields.length; i++) {
                        targetElement.append('<div class=\'form-group\'>');
                        var field = data.fields[i];
                        if (field.type) {

                            if (field.type === 'text') {
                                targetElement.append(
                                        '<span>' + field.name + '</span>' +
                                        '<input type=\'text\'>'
                                );

                                // Anonymous function you say? See http://stackoverflow.com/questions/16724620/mutable-variable-is-accessible-from-closure-how-can-i-fix-this
                                (function (currentField, currentInput) {
                                    currentInput.keyup(function () {
                                        currentField.value = currentInput.val();
                                        if (config.formValueChanged) {
                                            config.formValueChanged();
                                        }
                                    });
                                })(field, targetElement.children().last());


                            } else if (field.type === 'integer') {

                                targetElement.append(
                                        '<span>' + field.name + '</span>' +
                                        '<input type=\'number\'>'
                                );

                                (function (currentField, currentInput) {
                                    currentInput.keyup(function () {
                                        currentField.value = parseInt(currentInput.val());
                                        if (config.formValueChanged) {
                                            config.formValueChanged();
                                        }
                                    });
                                })(field, targetElement.children().last());

                            } else if (field.type === 'date') {

                                targetElement.append(
                                        '<span>' + field.name + '</span>' +
                                        '<input type=\'date\'>'
                                );

                                (function (currentField, currentInput) {
                                    currentInput.change(function () {
                                        currentField.value = currentInput.val();
                                        if (config.formValueChanged) {
                                            config.formValueChanged();
                                        }
                                    });
                                })(field, targetElement.children().last());

                            } else {
                                targetElement.append('<div>Unknown field type: ' + field.type + '</div>');
                            }

                        }
                        targetElement.append('</div>');
                    }

                }

                if (config.formRendered) {
                    config.formRendered(activitiForm);
                }

            }
        });

    }

};