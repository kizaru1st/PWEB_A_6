const model = require('../models/indexmodel');
const { Op, QueryTypes  } = require("sequelize");
const controller = {};

//----mahasiswa----
controller.rpsMahasiswa = async function(req, res){

    const rpsmhs = await model.course_plans.findAll({where:{rev:{[Op.gte]: 0}}, attributes: ['id','code', 'name', 'semester', 'credit']});
    res.render("mahasiswa/view_mahasiswa-rps", {rpsmhs});
}

controller.detailRPSMahasiswa = async function(req, res){
    const id = req.params.id
    const rps = await model.course_plans.findOne({where:{id} ,attributes: ['id','code', 'name', 'semester', 'credit','description']});
    const referensi = await model.course_plan_references.findAll({where:{course_plan_id : id} });
    const cpmk = await model.course_los.findAll({where:{course_plan_id : id} });
    const penilaian = await model.course_plan_assessments.findAll({where:{course_plan_id : id} ,attributes: [ 'id','name','percentage']})
    const pertemuan = await model.course_plan_details.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'week', 'material', 'method', 'student_experience']});
    const cp = await model.curriculum_los.findAll({attributes: [ 'id', 'code', 'name']});
    res.render("mahasiswa/view_mahasiswa-info-rps", { rps, referensi, cpmk, penilaian, cp, pertemuan });
}

// ---------DLL---------
controller.print = async function(req, res){
    const id = req.params.id;
    const rps = await model.course_plans.findOne({where:{id} ,attributes: ['id','code', 'name', 'semester', 'credit','description']});
    const referensi = await model.course_plan_references.findAll({where:{course_plan_id : id} });
    const cpmk = await model.course_los.findAll({where:{course_plan_id : id} });
    const penilaian = await model.course_plan_assessments.findAll({where:{course_plan_id : id} ,attributes: [ 'id','name','percentage']})
    const pertemuan = await model.course_plan_details.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'week', 'material', 'method', 'student_experience']});
    const cp = await model.curriculum_los.findAll({attributes: [ 'id', 'code', 'name']});
    res.render("mahasiswa/view_mahasiswa-print", { rps, referensi, cpmk, penilaian, cp, pertemuan });
}

module.exports = controller;