const{body}=require('express-validator');

exports.validateCourse=[
    body('Title').notEmpty().withMessage('Employee name is required'),
    body('Description').notEmpty().withMessage('Designation is required'),
    body('Created_At').optional().isISO8601().withMessage('Invalid  date format')
    //checks if the value is a valid ISO 8601 date format, such as , 
    //20205-07-25
    // body('DepartmentId').isMongoId().withMessage('Invalid Department ID'),
    // body('Contact').notEmpty().withMessage('Contact is required')
];