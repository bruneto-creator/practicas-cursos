const { check } = require('express-validator');

const validatorNewCreate = [
  check('categoria_id').notEmpty().withMessage('El campo categoria_id es obligatorio').isInt().withMessage('El campo categoria_id debe ser un número entero'),
  check('usuario_id').notEmpty().withMessage('El campo usuario_id es obligatorio').isInt().withMessage('El campo usuario_id debe ser un número entero'),
  check('estado_id').notEmpty().withMessage('El campo estado_id es obligatorio').isInt().withMessage('El campo estado_id debe ser un número entero'),
  check('titulo').notEmpty().withMessage('El campo titulo es obligatorio').isLength({ min: 2 }),
  check('descripcion').notEmpty().withMessage('El campo descripcion es obligatorio').isLength({ min: 2 }),
  check('imagen').notEmpty().withMessage('El campo imagen es obligatorio').isBase64().withMessage('El campo imagen debe ser Base64'),
  check('activo').optional().isBoolean()
];

const validatorNewUpdate = [
  check('categoria_id').optional().isInt(),
  check('usuario_id').optional().isInt(),
  check('estado_id').optional().isInt(),
  check('titulo').optional().isLength({ min: 2 }),
  check('descripcion').optional().isLength({ min: 2 }),
  check('imagen').optional().isBase64(),
  check('activo').optional().isBoolean()
];

module.exports = { validatorNewCreate, validatorNewUpdate };
