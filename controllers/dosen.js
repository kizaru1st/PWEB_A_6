const model = require('../models/indexmodel');
const controller = {};
const jwt = require('jsonwebtoken');
const { Op, QueryTypes  } = require("sequelize");
const sequelize = model.dbconfig;

// ===== RPS =====
controller.rpsDosen = async function(req, res){
    const token = req.cookies.token
    if (!token) return res.status(200).send("tidak ada token")
    const nip = jwt.verify(token, process.env.TOKEN)
    const matkuldosen = await sequelize.query(
        'SELECT course_plans.code, course_plans.name, course_plans.credit, course_plans.rev, course_plans.semester, course_plans.id, course_plans.created_by FROM course_plan_lecturers JOIN course_plans ON course_plan_lecturers.course_plan_id = course_plans.id JOIN lecturers ON course_plan_lecturers.lecturer_id = lecturers.id WHERE lecturers.reg_id= :nipDosen;',
        {
            replacements: { nipDosen: nip.email },
            type: QueryTypes.SELECT
        }
    );
    res.render("dosen/view_rps", { matkuldosen});
}

controller.detailRPS = async function(req, res){
    const id = req.params.id
    const rps = await model.course_plans.findOne({where:{id} ,attributes: ['id','code', 'name', 'semester', 'credit','description']});
    const referensi = await model.course_plan_references.findAll({where:{course_plan_id : id} });
    const cpmk = await model.course_los.findAll({where:{course_plan_id : id} });
    const penilaian = await model.course_plan_assessments.findAll({where:{course_plan_id : id} ,attributes: [ 'id','name','percentage']})
    const pertemuan = await model.course_plan_details.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'week', 'material', 'method', 'student_experience']});
    res.render("dosen/view_dosen-rps", {  rps, referensi, cpmk, penilaian, pertemuan });
}

// ===== PERTEMUAN =====
controller.tambahPertMingguan = async function(req, res){
    const { course_plan_id, week, material, method, student_experience } = req.body;
    try {
        await model.course_plan_details.create({
            course_plan_id,
            week,
            material,
            method,
            student_experience
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}

controller.ubahPertMingguan = async function(req, res){
    const { id, week, material, method, student_experience } = req.body;
    try {
        await model.course_plan_details.update({
            week,
            material,
            method,
            student_experience
        }
            ,{ where:{ id }});
        console.log("berhasil ubah pertemuan mingguan");
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}

controller.hapusPertMingguan = async function(req, res){
    const id = req.params.idhapus;
    try {
        await model.course_plan_details.destroy({ where:{ id }
        });
        console.log("berhasil hapuss pertemuan mingguan");
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}

// ====== Referensi ======
controller.tambahReferensi = async function(req, res){
    const { course_plan_id, title, author, publisher, year, description } = req.body;
    try {
        await model.course_plan_references.create({
            course_plan_id,
            title,
            author,
            publisher,
            year,
            description
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}

controller.ubahReferensi = async function(req, res){
    const { id, title, author, publisher, year, description } = req.body;
    try {
        await model.course_plan_references.update({
            title,
            author,
            publisher,
            year,
            description
        }
            ,{ where:{ id }
        });
        console.log("berhasil ubah referensi");
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}

controller.hapusReferensi = async function(req, res){
    const id = req.params.idhapus;
    try {
        await model.course_plan_references.destroy({ where:{ id }
        });
        console.log("berhasil hapuss referensi");
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}

// ===== CPMK =====

controller.tambahCPMK = async function(req, res){
    const { course_plan_id, cpl, name, code } = req.body;
    try {
        await model.course_los.create({
            course_plan_id,
            name,
            code,
            parent_id:1,
            type:1
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}

controller.ubahCPMK = async function(req, res){
    const { id, name, code, idcpl } = req.body;
    try {
        await model.course_los.update({
            name,
            code
        },{ 
            where:{ id }
        });
        console.log("berhasil ubah CPMK");
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}

controller.hapusCPMK = async function(req, res){
    const id = req.params.idhapus;
    try {
        await model.course_los.destroy({ where:{ id }});
        console.log("berhasil hapuss CPMK");
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}

// ===== KOMPONEN PENILAIAN =====

controller.tambahKompPenilaian = async function(req, res){

    const { course_plan_id, name, percentage } = req.body;

    const komponenExist = await model.course_plan_assessments.findOne({ where:{[Op.and]: [{name}, {course_plan_id}]} });
    if (komponenExist) return res.status(400).send('Komponen penilaian sudah ada');

    const totalKompPenilaian = await model.course_plan_assessments.sum('percentage',{ where:{ course_plan_id }});
    if (totalKompPenilaian+parseInt(percentage)>100) return res.status(400).send('Total bobot melebihi batas maksimum');

    try {
        await model.course_plan_assessments.create({
            course_plan_id,
            name,
            percentage,
            flag:0
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}

controller.ubahKompPenilaian = async function(req, res){

    const { id, persentaseLama, course_plan_id, name, percentage } = req.body;

    const totalKompPenilaian = await model.course_plan_assessments.sum('percentage',{ where:{ course_plan_id }});
    if (totalKompPenilaian-parseInt(persentaseLama)+parseInt(percentage)>100) return res.status(400).send('Total bobot melebihi batas maksimum');

    try {
        await model.course_plan_assessments.update({
            name,
            percentage
        }
            ,{ where:{ id }});
        console.log("berhasil ubah komponen penilaian");
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }

}

controller.hapusKompPenilaian = async function(req, res){

    const id = req.params.idhapus;

    try {
        await model.course_plan_assessments.destroy({ where:{ id }
        });
        console.log("berhasil hapuss komponen penilaian");
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }

}

module.exports = controller;