const { check } = require('express-validator');

const validatorStateRequire = [
  check('nombre').notEmpty().withMessage('El campo nombre es obligatorio').isString().withMessage('El campo nombre debe ser texto').isLength({ min: 2, max: 50 }).withMessage('El campo debe tener entre 2 y 50 caracteres'),
  check('abreviacion').notEmpty().withMessage('El campo abreviacion es obligatorio').isString().withMessage('El campo abreviacion debe ser texto').isLength({ min: 2, max: 5 }).withMessage('El campo debe tener entre 2 y 5 caracteres')
];

const validatorStateOptional = [
  check('nombre').optional().isString().isLength({ min: 2, max: 50 }),
  check('abreviacion').optional().isString().isLength({ min: 2, max: 5 }),
  check('activo').optional().isBoolean()
];

module.exports = { validatorStateRequire, validatorStateOptional };
